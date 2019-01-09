package com.demo.springbootservertodo.service;

import com.alibaba.fastjson.JSONObject;
import com.demo.springbootservertodo.entity.DingAccessToken;
import com.demo.springbootservertodo.entity.DingJsApiTicket;
import com.demo.springbootservertodo.entity.DingProperty;
import com.demo.springbootservertodo.mapper.DingAccessTokenMapper;
import com.demo.springbootservertodo.mapper.DingJsApiTicketMapper;
import com.demo.springbootservertodo.mapper.DingPropertyMapper;
import com.demo.springbootservertodo.service.dingservice.DingAuthService;
import com.dingtalk.api.response.OapiGetJsapiTicketResponse;
import com.dingtalk.api.response.OapiGettokenResponse;
import com.dingtalk.oapi.lib.aes.DingTalkJsApiSingnature;
import com.taobao.api.ApiException;
import com.taobao.api.TaobaoResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * DingAccessToken & jsticket 的获取封装
 */
@Service
//@Configuration
public class AuthService {
    @Autowired
    DingAuthService dingAuthService;

    @Autowired(required = false)
    DingPropertyMapper propertyMapper;

    @Autowired(required = false)
    DingAccessTokenMapper tokenMapper;

    @Autowired(required = false)
    DingJsApiTicketMapper ticketMapper;


    // 调整到1小时50分钟
    private static final long cacheTime = 1000 * 60 * 55 * 2;

    // 获取配置信息
    public DingProperty getDingProperty(String appkey) {
        return selectDingProperty(appkey);
    }

    // 获取js api config
    public JSONObject getJsApiConfig(String appkey, HttpServletRequest request) {
        String urlString = request.getRequestURL().toString();
        String queryString = request.getQueryString();

        String url;
        if (queryString != null) {
//            queryStirngEncode = URLDecoder.decode(queryString);
            url = request.getParameter("href");
        } else {
            url = urlString;
        }

        long timeStamp = System.currentTimeMillis();
        String signedUrl = url;
        String ticket = null;
        String nonceStr = null;
        String signatrue = null;
        String agentid = null;

        try {
            DingJsApiTicket curTicket = selectDingJsApiTicket(appkey);
            ticket = curTicket == null ? null : curTicket.getJsapi_ticket();

            DingProperty curDingProperty = selectDingProperty(appkey);
            nonceStr = curDingProperty == null ? null : curDingProperty.getNoncestr();

            signatrue = sign(ticket, nonceStr, timeStamp, signedUrl);

            agentid = "";
        } catch (ApiException e) {
            e.printStackTrace();
        }

        JSONObject config = new JSONObject();
        config.put("signature", signatrue);
        config.put("nonceStr", nonceStr);
        config.put("timeStamp", timeStamp);
        config.put("corpId", appkey);
        config.put("agentId", agentid);
        config.put("errcode", 0);

        return config;
    }

    // 获取access token，更新access token同时，要更新jsapi ticket
    public DingAccessToken getAccessToken(String appkey) {
        long curTime = System.currentTimeMillis();
        DingAccessToken existedToken = tokenMapper.getByAppKey(appkey);

        if (existedToken == null || existedToken.getAccess_token() == null || curTime - existedToken.getBegin_time().getTime() >= cacheTime) {
            DingAccessToken newToken = new DingAccessToken();

            try {
                DingProperty dingProperty = selectDingProperty(appkey);

                OapiGettokenResponse tokenResponse = dingAuthService.getAccessToken(appkey, dingProperty.getApp_secret());
                if (tokenResponse.isSuccess()) {
                    // 更新token 入库
                    newToken.setApp_key(appkey);
                    newToken.setAccess_token(tokenResponse.getAccessToken());
                    newToken.setBegin_time(new Date(curTime));

                    insertOrUpdateDingAccessToken(newToken);

                    // 刷新ticket 入库
                    OapiGetJsapiTicketResponse ticketResponse =  dingAuthService.getJsapiTicket(tokenResponse.getAccessToken());
                    if(ticketResponse.isSuccess()){
                        DingJsApiTicket newTicket = new DingJsApiTicket();
                        newTicket.setApp_key(appkey);
                        newTicket.setJsapi_ticket(ticketResponse.getTicket());
                        newTicket.setBegin_time(new Date(curTime));

                        insertOrUpdateDingJsapiTicket(newTicket);
                    }
                }
            } catch (Exception e) {
                e.printStackTrace();
                newToken = null;
            }

            return newToken;
        } else {
            return existedToken;
        }
    }

    public DingJsApiTicket getJsApiTicket(String appkey){
        return selectDingJsApiTicket(appkey);
    }

    // 数字签名
    private String sign(String ticket, String nonceStr, long timeStamp, String url) throws ApiException {
        try {
            return DingTalkJsApiSingnature.getJsApiSingnature(url, nonceStr, timeStamp, ticket);
        } catch (Exception ex) {
            throw new ApiException("0", ex.getMessage());
        }
    }

    // 根据 appkey 查询 Ding配置内容
    private DingProperty selectDingProperty(String appkey) {
        return propertyMapper.getByAppKey(appkey);
    }

    // 根据 appkey 查找 access token
    private DingAccessToken selectDingAccessToken(String appkey) {
        return tokenMapper.getByAppKey(appkey);
    }

    // update ingAccessToken
    private boolean updateDingAccessToken(DingAccessToken token) {
        try {
            tokenMapper.update(token);

            return true;
        } catch (Exception e) {
            e.printStackTrace();

            return false;
        }
    }

    // 创建 一条 AccessToken
    private boolean insertDingAccessToken(DingAccessToken token) {
        try {
            tokenMapper.insert(token);

            return true;
        } catch (Exception e) {
            e.printStackTrace();

            return false;
        }
    }

    private boolean insertOrUpdateDingAccessToken(DingAccessToken token) {
        boolean result = true;
        try {
            DingAccessToken exsited = tokenMapper.getByAppKey(token.getApp_key());

            if (exsited == null) {
                tokenMapper.insert(token);
            } else {
                tokenMapper.update(token);
            }
        } catch (Exception e) {
            e.printStackTrace();
            result = false;
        }
        return result;
    }

    // 根据 appkey 查找 DingJsApiTicket
    private DingJsApiTicket selectDingJsApiTicket(String appkey) {
        return ticketMapper.getByAppKey(appkey);
    }

    // update ingAccessToken
    private boolean updateDingJsApiTicket(DingJsApiTicket ticket) {
        try {
            ticketMapper.update(ticket);

            return true;
        } catch (Exception e) {
            e.printStackTrace();

            return false;
        }
    }

    // 创建 一条 DingJsApiTicket
    private boolean insertDingJsApiTicket(DingJsApiTicket ticket) {
        try {
            ticketMapper.insert(ticket);

            return true;
        } catch (Exception e) {
            e.printStackTrace();

            return false;
        }
    }

    private boolean insertOrUpdateDingJsapiTicket(DingJsApiTicket ticket) {
        boolean result = true;
        try {
            DingJsApiTicket exsited = ticketMapper.getByAppKey(ticket.getApp_key());

            if (exsited == null) {
                ticketMapper.insert(ticket);
            } else {
                ticketMapper.update(ticket);
            }
        } catch (Exception e) {
            e.printStackTrace();
            result = false;
        }
        return result;
    }

}
