package com.demo.springbootservertodo.service.dingservice;

import com.dingtalk.api.DefaultDingTalkClient;
import com.dingtalk.api.DingTalkClient;
import com.dingtalk.api.request.OapiMicroappListByUseridRequest;
import com.dingtalk.api.response.OapiMicroappListByUseridResponse;
import com.taobao.api.ApiException;
import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;

/**
 * 服务端API - 应用管理
 * 开发文档链接：https://open-doc.dingtalk.com/microapp/serverapi2/zc304p
 * 2018-12-30
 */
@Service
//@Transactional
public class DingMicroappService {

    /**
     * 获取员工可见的应用列表
     * @param userId
     * @param accessToken
     * @return
     * @throws ApiException
     */
    public OapiMicroappListByUseridResponse getListByUserId(String userId, String accessToken) throws ApiException {
        DingTalkClient client = new DefaultDingTalkClient("https://oapi.dingtalk.com/microapp/list_by_userid");
        OapiMicroappListByUseridRequest request = new OapiMicroappListByUseridRequest();
        request.setUserid(userId);
        request.setHttpMethod("GET");
        OapiMicroappListByUseridResponse response = client.execute(request, accessToken);

        return  response;
    }
}
