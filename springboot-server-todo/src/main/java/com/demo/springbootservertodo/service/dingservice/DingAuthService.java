package com.demo.springbootservertodo.service.dingservice;

import com.dingtalk.api.DefaultDingTalkClient;
import com.dingtalk.api.request.OapiGetJsapiTicketRequest;
import com.dingtalk.api.request.OapiGettokenRequest;
import com.dingtalk.api.response.OapiGetJsapiTicketResponse;
import com.dingtalk.api.response.OapiGettokenResponse;
import com.taobao.api.ApiException;
import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;

@Service
//@Transactional
public class DingAuthService {
    /**
     * 获取access token
     *
     * @return
     * @throws ApiException
     */
    public OapiGettokenResponse getAccessToken(String appkey, String appsecret) throws ApiException {
        DefaultDingTalkClient client = new DefaultDingTalkClient("https://oapi.dingtalk.com/gettoken");
        OapiGettokenRequest request = new OapiGettokenRequest();
        request.setAppkey(appkey);
        request.setAppsecret(appsecret);
        request.setHttpMethod("GET");

        OapiGettokenResponse response = client.execute(request);

        return response;
    }

    /**
     * 获取jsapi ticket
     *
     * @param accessToken
     * @return
     * @throws ApiException
     */
    public OapiGetJsapiTicketResponse getJsapiTicket(String accessToken) throws ApiException {
        DefaultDingTalkClient client = new DefaultDingTalkClient("https://oapi.dingtalk.com/get_jsapi_ticket");
        OapiGetJsapiTicketRequest request = new OapiGetJsapiTicketRequest();
        request.putOtherTextParam("access_token", accessToken);

        OapiGetJsapiTicketResponse response = client.execute(request);

        return response;
    }
}
