package kr.co.rwm;

import java.util.TimeZone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class WebsocketchatApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebsocketchatApplication.class, args);
        TimeZone.setDefault(TimeZone.getTimeZone("UTC"));
    }

}
