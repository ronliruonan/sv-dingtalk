package com.demo.springbootservertodo.entity;

import java.util.Date;

public class DingJsApiTicket {
    private String app_key;
    private String jsapi_ticket;
    private Date begin_time;

    public DingJsApiTicket() {
        this.sv_log = "正常";
    }

    public String getSv_log() {
        return sv_log;
    }

    public void setSv_log(String sv_log) {
        this.sv_log = sv_log;
    }

    private String sv_log;

    public String getApp_key() {
        return app_key;
    }

    public void setApp_key(String app_key) {
        this.app_key = app_key;
    }

    public String getJsapi_ticket() {
        return jsapi_ticket;
    }

    public void setJsapi_ticket(String jsapi_ticket) {
        this.jsapi_ticket = jsapi_ticket;
    }

    public Date getBegin_time() {
        return begin_time;
    }

    public void setBegin_time(Date begin_time) {
        this.begin_time = begin_time;
    }
}
