package com.bgeconsortium.bge.services;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class DrugInfoService
{
    private final WebClient webClient;

    public DrugInfoService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://rxnav.nlm.nih.gov").build();
    }

    public Mono<String> getDrugInfo(String drugName) {
        // Updated the URL to include the correct path and query parameters
        return this.webClient.get()
                .uri(uriBuilder -> uriBuilder
                        .path("/REST/Prescribe/rxcui.json")
                        .queryParam("name", drugName)
                        .queryParam("allsrc", "0") // Adjust as necessary for the search scope
                        .build())
                .retrieve()
                .bodyToMono(String.class); // Retrieve the response body as a String (JSON format)
    }
}
