package com.api.thrift;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController

public class ThriftApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThriftApplication.class, args);
	}
	@RequestMapping(value = "/")
	public String hello() {
		return "Hello World";
	}
}
