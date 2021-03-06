package com.demo.springbootservertodo.util;

import com.alibaba.fastjson.JSONObject;
import com.demo.springbootservertodo.entity.DingAccessToken;
import com.demo.springbootservertodo.service.authService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;


@Service
//@Transactional
public class TokenUtil {
    @Autowired
    private static authService authService;

//    @Autowired
//    public void setAuthService(AuthService authService1) {
//        this.AuthService = authService1;
//    }

    public static JSONObject CheckAccessToken(String appKey) {
        JSONObject result = new JSONObject();
        result.put("errcode", 0L);
        result.put("errmsg", "Ok");

        try {
            DingAccessToken token = authService.getAccessToken(appKey);
            if (token == null) {
                result.put("errcode", 132404L);
                result.put("errmsg", "Not found access_token");
            } else {
                result.put("access_token", token);
            }
        } catch (Exception e) {
            result.put("errcode", 132500L);

            result.put("errmsg", e.toString());
        }
        return result;
    }
}
