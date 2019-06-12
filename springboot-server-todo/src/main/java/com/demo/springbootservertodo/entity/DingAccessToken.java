package com.demo.springbootservertodo.entity;

import java.util.Date;

public class DingAccessToken {
    public DingAccessToken() {
        this.sv_log = "正常";
    }

    public String getApp_key() {
        return app_key;
    }

    public void setApp_key(String app_key) {
        this.app_key = app_key;
    }

    private String app_key;

    public String getAccess_token() {
        return access_token;
    }

    public void setAccess_token(String access_token) {
        this.access_token = access_token;
    }

    private String access_token;

    public Date getBegin_time() {
        return begin_time;
    }

    public void setBegin_time(Date begin_time) {
        this.begin_time = begin_time;
    }

    private Date begin_time;

    public String getSv_log() {
        return sv_log;
    }

    public void setSv_log(String sv_log) {
        this.sv_log = sv_log;
    }

    private String sv_log;
}
