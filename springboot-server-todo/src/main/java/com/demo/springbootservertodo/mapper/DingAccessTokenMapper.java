package com.demo.springbootservertodo.mapper;

import com.demo.springbootservertodo.entity.DingAccessToken;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface DingAccessTokenMapper {

    @Select("select * from ding_access_token where app_key=#{appkey}")
    DingAccessToken getByAppKey(String appkey);

    @Insert({"insert into ding_access_token(app_key,access_token,begin_time,sv_log) values(#{app_key},#{access_token},#{begin_time},#{sv_log})"})
    void insert(DingAccessToken accessToken);

    @Update({"update ding_access_token set access_token=#{access_token}, begin_time=#{begin_time}, sv_log=#{sv_log} where app_key=#{app_key}"})
    void update(DingAccessToken accessToken);
}
