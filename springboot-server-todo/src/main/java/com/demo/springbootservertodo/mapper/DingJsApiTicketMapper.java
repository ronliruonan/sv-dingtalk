package com.demo.springbootservertodo.mapper;

import com.demo.springbootservertodo.entity.DingAccessToken;
import com.demo.springbootservertodo.entity.DingJsApiTicket;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface DingJsApiTicketMapper {

    @Select("select * from ding_jsapi_ticket where app_key=#{appkey}")
    DingJsApiTicket getByAppKey(String appkey);

    @Insert({"insert into ding_jsapi_ticket(app_key,jsapi_ticket,begin_time,sv_log) values(#{app_key},#{jsapi_ticket},#{begin_time},#{sv_log})"})
    void insert(DingJsApiTicket jsApiTicket);

    @Update({"update ding_jsapi_ticket set jsapi_ticket=#{jsapi_ticket}, begin_time=#{begin_time}, sv_log=#{sv_log} where app_key=#{app_key}"})
    void update(DingJsApiTicket jsApiTicket);
}
