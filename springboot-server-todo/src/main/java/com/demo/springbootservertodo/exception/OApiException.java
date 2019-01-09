package com.demo.springbootservertodo.exception;

public class OApiException  extends  Exception{
    public static final int ERR_RESULT_RESOLUTION = -2;

    public OApiException(String field){
        this(ERR_RESULT_RESOLUTION, "Cannot resulve field" + field + " from oapi response");
    }

    public OApiException(int errCode, String errMsg){
        super("error code: " + errCode + ", error message: " + errMsg);
    }
}
