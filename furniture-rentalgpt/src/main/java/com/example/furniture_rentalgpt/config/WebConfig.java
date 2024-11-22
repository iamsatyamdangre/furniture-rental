package com.example.furniture_rentalgpt.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@CrossOrigin("http://localhost:4200")
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/")
		.allowedOrigins("http://localhost:4200")
		.allowedMethods("GET", "POST", "PUT", "DELETE")
		.allowedHeaders("*")
		.allowCredentials(true);
	}
}