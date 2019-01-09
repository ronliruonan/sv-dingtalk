package com.demo.springbootservertodo.controller;

import com.alibaba.fastjson.JSONObject;
import com.demo.springbootservertodo.entity.DingAccessToken;
import com.demo.springbootservertodo.entity.DingJsApiTicket;
import com.demo.springbootservertodo.entity.DingProperty;
import com.demo.springbootservertodo.service.AuthService;
import com.taobao.api.ApiException;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/auth", produces = "application/json;charset=UTF-8")
public class AuthApiController {
    @Autowired
    private AuthService authService;

    @ApiOperation(value = "测试接口：获取钉钉配置；", notes = "不建议在生产环境使用")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appkey", value = "appkey", required = true, paramType = "path", dataType = "String")
    })
    @GetMapping("/dingproperty/{appkey}")
    public JSONObject dingProperty(@PathVariable(name = "appkey") String appkey) {
        JSONObject result = new JSONObject();

        try {
            DingProperty dingProperty = authService.getDingProperty(appkey);

            if (dingProperty == null) {
                result.put("errcode", 132404);
                result.put("errmsg", "not found");
            } else {
                result.put("app_key", dingProperty.getApp_key());
                result.put("app_secret", dingProperty.getApp_secret());
                result.put("noncestr", dingProperty.getNoncestr());

                result.put("errcode", 0);
                result.put("errmsg", "ok");
            }
        } catch (Exception e) {
            result.put("errcode", 132500);
            result.put("errmsg", e.getMessage());
        }
        return result;
    }

    @ApiOperation(value = "获取Jsapi权限配置", notes = "用于前端的dd.config配置")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appkey", value = "appkey", required = true, paramType = "header", dataType = "String")
    })
    @GetMapping(value = "/jsapi-oauth")
    public JSONObject getConfig(@RequestHeader(name = "appkey") String appKey, HttpServletRequest request) {
        DingAccessToken token = authService.getAccessToken(appKey);

        JSONObject config = authService.getJsApiConfig(appKey, request);

        return config;
    }

    @ApiOperation(value = "获取access token", notes = "应当根据appkey来获取")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appkey", value = "appkey", required = true, paramType = "header", dataType = "String")
    })
    @GetMapping(value = "/access-token")
    public JSONObject getAccessToken(@RequestHeader(name = "appkey") String appKey) throws ApiException {
        JSONObject result = new JSONObject();

        try {
            DingAccessToken token = authService.getAccessToken(appKey);

            if (token == null) {
                result.put("errcode", 132404);
                result.put("errmsg", "not found");
            } else {
                result.put("access_token", token.getAccess_token());

                result.put("errcode", 0);
                result.put("errmsg", "ok");
            }
        } catch (Exception e) {
            result.put("errcode", 132500);
            result.put("errmsg", e.getMessage());
        }
        return result;
    }

    @ApiOperation(value = "获取jsapi ticket", notes = "应当根据appkey来获取")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appkey", value = "appkey", required = true, paramType = "header", dataType = "String")
    })
    @GetMapping(value = "/jsapi-ticket")
    public JSONObject getJsapTicket(@RequestHeader(name = "appkey") String appKey) throws ApiException {
        DingAccessToken token = authService.getAccessToken(appKey);

        JSONObject result = new JSONObject();

        try {
            DingJsApiTicket ticket = authService.getJsApiTicket(appKey);

            if (ticket == null) {
                result.put("errcode", 132404);
                result.put("errmsg", "not found");
            } else {
                result.put("ticket", ticket.getJsapi_ticket());//.getAccess_token());

                result.put("errcode", 0);
                result.put("errmsg", "ok");
            }
        } catch (Exception e) {
            result.put("errcode", 132500);
            result.put("errmsg", e.getMessage());
        }
        return result;
    }
}
