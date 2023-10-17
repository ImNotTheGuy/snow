package com.ludo.snow.rest.health;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/health")
@Slf4j
public class HealthController {

    @GetMapping()
    public String health(){
        log.info("App health check was requested");
        return "Snow is up and running !";
    }
}
