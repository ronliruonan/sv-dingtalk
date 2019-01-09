package com.demo.springbootservertodo.controller;

import com.demo.springbootservertodo.entity.DingAccessToken;
import com.demo.springbootservertodo.service.AuthService;
import com.demo.springbootservertodo.service.dingservice.DingUserService;
import com.taobao.api.ApiException;
import com.taobao.api.TaobaoResponse;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/users", produces = "application/json;charset=UTF-8")
public class UserApiController {
    @Autowired
    private AuthService authService;
    @Autowired
    private DingUserService dingUserService;

    @ApiOperation(value = "根据code获取用户信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appkey", value = "appkey", required = true, paramType = "header", dataType = "String"),
            @ApiImplicitParam(name = "code", value = "临时Code", required = true, paramType = "path", dataType = "String")
    })
    @GetMapping(value = "/auth/{code}")
    public String getUserInfo(@RequestHeader(name = "appkey", required = false) String appKey,
                              @PathVariable(value = "code") String code) throws ApiException {
        DingAccessToken accessToken = authService.getAccessToken(appKey);


        TaobaoResponse result = dingUserService.getUserInfoByCode(accessToken.getAccess_token(), code);

        return result.getBody();
    }

    @ApiOperation(value = "根据userId获取用户信息")
    @ApiImplicitParams({
            @ApiImplicitParam(name = "appkey", value = "appkey", required = true, paramType = "header", dataType = "String"),
            @ApiImplicitParam(name = "userId", value = "ding用户账号", required = true, paramType = "path", dataType = "String")
    })
    @GetMapping(value = "/{userId}")
    public String getUser(@RequestHeader(name = "appkey", required = false) String appKey,
                          @PathVariable(value = "userId") String userId) throws ApiException {
        DingAccessToken accessToken = authService.getAccessToken(appKey);


        TaobaoResponse result = dingUserService.getUserInfoByUserId(userId, accessToken.getAccess_token());

        return result.getBody();
    }
}
