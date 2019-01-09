package com.demo.springbootservertodo.result;

import com.alibaba.fastjson.JSONObject;
import com.taobao.api.TaobaoResponse;

public class JsonResult {

    /**
     * 针对集成TaobaoResponse的Json返回结果
     * @param response
     * @return
     */
    public static String JsonTaobaoResult(TaobaoResponse response) {
        JSONObject result = new JSONObject();

        if(response.isSuccess()){
            String str = response.getBody();
            result = JSONObject.parseObject(str);

            result.put("errcode", 0);
        } else {
            result.put("errcode", response.getErrorCode());
            result.put("errmsg", response.getMsg());
        }

        return result.toJSONString();
    }
}
