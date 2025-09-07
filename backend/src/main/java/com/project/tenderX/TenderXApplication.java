package com.project.tenderX;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class TenderXApplication {

		public static void main(String[] args) {
			SpringApplication.run(TenderXApplication.class, args);
		}

		@RestController
		public static class HelloController {
			@GetMapping("/")
			public String home() {
				return "Server is running!";
			}
		}

}
