package com.demo.springbootservertodo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@MapperScan("com.demo.springbootservertodo.mapper")
public class SpringbootServerTodoApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootServerTodoApplication.class, args);
    }

}
