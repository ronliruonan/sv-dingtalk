package com.demo.springbootservertodo.response;

public class AyaResponseUtil {

    public static AyaResponse success(Object data){
        AyaResponse response = new AyaResponse();
        response.setErrcode(0);
        response.setErrmsg("ok");
        response.setData(data);

        return response;
    }

    public static AyaResponse success(){
        return  success(null);
    }

    public static AyaResponse error(int code, String msg){
        AyaResponse response = new AyaResponse();
        response.setErrcode(code);
        response.setErrmsg(msg);

        return response;
    }

    public static AyaResponse ayaJson(Object data, int code, String msg){
        if(data == null){
            return  error(code,msg);
        }else{
            return  success(data);
        }
    }

    public static  AyaResponse ayaJson(Object data){
        return  ayaJson(data, 132404,"不存在");
    }
}
