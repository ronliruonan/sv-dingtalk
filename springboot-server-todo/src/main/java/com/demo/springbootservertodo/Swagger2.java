package com.demo.springbootservertodo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
public class Swagger2 {

    @Bean
    public Docket createRestApi(){
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.demo.springbootservertodo"))
                .paths(PathSelectors.any())
                .build();
    }
    private ApiInfo apiInfo(){
        return  new ApiInfoBuilder()
                .title("Spring Boot中使用Swagger2构建RESTFul APIs")
                .description("Joten Java 封装DingTalk SDK")
                .termsOfServiceUrl("http://blog.jotentech.com")
//                .contact(new Contact("Ron小白","https://blog.csdn.net/u012360222","evil@live.com"))
                .version("1.0")
                .build();
    }
}
