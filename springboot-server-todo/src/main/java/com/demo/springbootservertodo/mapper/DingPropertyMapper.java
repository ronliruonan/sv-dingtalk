package com.demo.springbootservertodo.mapper;

import com.demo.springbootservertodo.entity.DingAccessToken;
import com.demo.springbootservertodo.entity.DingProperty;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface DingPropertyMapper {

    @Select("select * from ding_property where app_key=#{appkey}")
    DingProperty getByAppKey(String appkey);
}
