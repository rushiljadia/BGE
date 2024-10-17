package com.bgeconsortium.bge;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
public class DrugInfoController {

    private final WebClient webClient;

    public DrugInfoController() {
        // Initialize WebClient
        this.webClient = WebClient.builder()
                .baseUrl("https://rxnav.nlm.nih.gov")
                .build();
    }

    // API to search for drug information from RxNorm by drug name
    @GetMapping("/drug-info/rxnorm")
    public Mono<String> getDrugInfo(@RequestParam String name) {
        String apiUrl = "/REST/drugs.json?name=" + name; // Specify the correct endpoint for getting drug info

        // Make the GET request to RxNorm API
        return webClient.get()
                .uri(apiUrl)
                .retrieve()
                .bodyToMono(String.class)
                .onErrorReturn("Error fetching drug information: " + "404 Not Found");
    }
}
