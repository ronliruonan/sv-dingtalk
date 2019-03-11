package com.demo.springbootservertodo.controller;

import com.alibaba.fastjson.JSONObject;
import com.demo.springbootservertodo.entity.DingAccessToken;
import com.demo.springbootservertodo.entity.DingJsApiTicket;
import com.demo.springbootservertodo.entity.DingProperty;
import com.demo.springbootservertodo.service.authService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/auth", produces = "application/json;charset=UTF-8")
public class authApiController {
    private final authService authService;

    @Autowired
    public authApiController(authService authService1) {
        this.authService = authService1;
    }

//    public authApiController(){}

    @ApiOperation(value = "测试接口：获取钉钉配", notes = "不建议在生产环境使用")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appKey", value = "appKey", required = true, paramType = "path", dataType = "String")
    })
    @GetMapping("/dingProperty/{appKey}")
    public JSONObject dingProperty(@PathVariable(name = "appKey") String appKey) {
        JSONObject result = new JSONObject();
        result.put("errcode", 0L);
        result.put("errmsg", "ok");

        try {
            DingProperty dingProperty = authService.getDingProperty(appKey);

            if (dingProperty == null) {
                result.put("errcode", 132404L);
                result.put("errmsg", "not found");
            } else {
                result.put("app_key", dingProperty.getApp_key());
                result.put("app_secret", dingProperty.getApp_secret());
                result.put("noncestr", dingProperty.getNoncestr());
            }
        } catch (Exception e) {
            result.put("errcode", 132500L);
            result.put("errmsg", e.getMessage());
        }
        return result;
    }


    @ApiOperation(value = "获取Jsapi权限配置", notes = "用于前端的dd.config配置")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appKey", value = "appKey", required = true, paramType = "header", dataType = "String")
    })
    @GetMapping(value = "/jsapi-oauth")
    public JSONObject getConfig(@RequestHeader(name = "appKey") String appKey, HttpServletRequest request) throws UnsupportedEncodingException {
        DingAccessToken token = authService.getAccessToken(appKey);

        if (token == null) {
            JSONObject error = new JSONObject();
            error.put("errcode", 132404L);
            error.put("errmsg", "Not found access_token");
            return error;
        }

        return authService.getJsApiConfig(appKey, request);
    }


    @ApiOperation(value = "获取access token", notes = "应当根据appkey来获取")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appKey", value = "appKey", required = true, paramType = "header", dataType = "String")
    })
    @GetMapping(value = "/access-token")
    public JSONObject getAccessToken(@RequestHeader(name = "appKey") String appKey) {
        JSONObject result = new JSONObject();
        result.put("errcode", 0);
        result.put("errmsg", "ok");

        try {
            DingAccessToken token = authService.getAccessToken(appKey);
            if (token == null) {
                JSONObject error = new JSONObject();
                error.put("errcode", 132404L);
                error.put("errmsg", "Not found access_token");
                return error;
            }

            result.put("access_token", token.getAccess_token());
        } catch (Exception e) {
            result.put("errcode", 132500);
            result.put("errmsg", e.getMessage());
        }
        return result;
    }


    @ApiOperation(value = "获取jsapi ticket", notes = "应当根据appkey来获取")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appKey", value = "appKey", required = true, paramType = "header", dataType = "String")
    })
    @GetMapping(value = "/jsApi-ticket")
    public JSONObject getJsapTicket(@RequestHeader(name = "appKey") String appKey) {
        DingAccessToken token = authService.getAccessToken(appKey);
        if (token == null) {
            JSONObject error = new JSONObject();
            error.put("errcode", 132404L);
            error.put("errmsg", "Not found access_token");
            return error;
        }

        JSONObject result = new JSONObject();
        result.put("errcode", 0);
        result.put("errmsg", "ok");

        try {
            DingJsApiTicket ticket = authService.getJsApiTicket(appKey);

            if (ticket == null) {
                result.put("errcode", 132404);
                result.put("errmsg", "not found");
            } else {
                result.put("ticket", ticket.getJsapi_ticket());
            }
        } catch (Exception e) {
            result.put("errcode", 132500);
            result.put("errmsg", e.getMessage());
        }
        return result;
    }
}
