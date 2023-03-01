package com.example.fullstackscaffold

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class HelloController {

    @GetMapping("/api/greeting")
    fun sayHello(): Map<String, String> = mapOf("message" to "Hello World")
}
