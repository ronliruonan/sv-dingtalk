package com.demo.springbootservertodo.controller;

import com.demo.springbootservertodo.entity.DingAccessToken;
import com.demo.springbootservertodo.service.AuthService;
import com.demo.springbootservertodo.service.dingservice.DingMicroappService;
import com.taobao.api.ApiException;
import com.taobao.api.TaobaoResponse;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/microapps", produces = "application/json;charset=UTF-8")
public class MicroappApiController {
    private final AuthService authService;
    private final DingMicroappService microappService;

    @Autowired
    public MicroappApiController(AuthService authService1, DingMicroappService dingMicroappService) {
        this.authService = authService1;
        this.microappService = dingMicroappService;
    }

    @ApiOperation(value = "获取用户范围内的 应用")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appkey", value = "appkey", required = true, paramType = "header", dataType = "String"),
            @ApiImplicitParam(name = "userId", value = "ding用户账号", required = true, paramType = "path", dataType = "String")
    })
    @GetMapping(value = "/user/{userId}")
    public String getMicroappListByUserId(@RequestHeader(name = "appkey") String appKey,
                                          @PathVariable("userId") String userId) throws ApiException {
        DingAccessToken accessToken = authService.getAccessToken(appKey);

        TaobaoResponse response = microappService.getListByUserId(userId, accessToken.getAccess_token());

//        String result = response.getBody();

        return response.getBody();
    }
}
