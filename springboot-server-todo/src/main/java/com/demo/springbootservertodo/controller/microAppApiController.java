package com.demo.springbootservertodo.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.demo.springbootservertodo.entity.DingAccessToken;
import com.demo.springbootservertodo.service.authService;
import com.demo.springbootservertodo.service.dingservice.DingMicroappService;
import com.taobao.api.ApiException;
import com.taobao.api.TaobaoResponse;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/microapps", produces = "application/json;charset=UTF-8")
public class microAppApiController {
    private final authService authService;
    private final DingMicroappService microappService;

    @Autowired
    public microAppApiController(authService authService1, DingMicroappService dingMicroappService) {
        this.authService = authService1;
        this.microappService = dingMicroappService;
    }


    @ApiOperation(value = "获取用户范围内的 应用")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appKey", value = "appKey", required = true, paramType = "header", dataType = "String"),
            @ApiImplicitParam(name = "userId", value = "ding用户账号", required = true, paramType = "path", dataType = "String")
    })
    @GetMapping(value = "/user/{userId}")
    public String getMicroappListByUserId(@RequestHeader(name = "appKey") String appKey,
                                          @PathVariable("userId") String userId) throws ApiException {
        DingAccessToken accessToken = authService.getAccessToken(appKey);
        if (accessToken == null) {
            JSONObject error = new JSONObject();
            error.put("errcode", 132404L);
            error.put("errmsg", "Not found access_token");
            return error.toJSONString();
        }

        TaobaoResponse response = microappService.getListByUserId(userId, accessToken.getAccess_token());
        JSONObject result = JSON.parseObject(response.getBody());

        result.put("md5", md5(response.getBody()));
        return result.toJSONString();
    }

    private String md5(String plaintxt) {
        String md5code = null;
        // 定义一个字节数组
        byte[] secretBytes = null;
        try {
            // 生成一个MD5加密计算摘要
            MessageDigest md = MessageDigest.getInstance("MD5");
            // 对字符串加密
            md.update(plaintxt.getBytes());
            // 获的加密后的数据
            secretBytes = md.digest();

            // 将加密后的数据转化为16进制数字
            md5code = new BigInteger(1, secretBytes).toString(16);
            // 如果生成数字未满32位，需要前面补0
            for (int i = 0; i < 32 - md5code.length(); i++) {
                md5code = "0" + md5code;
            }
        } catch (NoSuchAlgorithmException e) {
            // do nothing
        }

        return md5code;
    }
}
