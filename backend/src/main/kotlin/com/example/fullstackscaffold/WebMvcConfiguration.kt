package com.example.fullstackscaffold

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

@Configuration
class WebMvcConfiguration : WebMvcConfigurer {

    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("/index.html").addResourceLocations("classpath:/index.html")
        registry.addResourceHandler("/static/**").addResourceLocations("classpath:/static/")
    }
}
