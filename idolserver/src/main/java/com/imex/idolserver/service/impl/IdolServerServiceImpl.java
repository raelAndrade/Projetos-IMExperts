package com.imex.idolserver.service.impl;

import com.imex.idolserver.dto.IdolRequest;
import com.imex.idolserver.dto.IdolResponse;
import com.imex.idolserver.service.IdolServerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class IdolServerServiceImpl implements IdolServerService {

    @Autowired
    private RestTemplate restTemplate;
    
    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

    @Value("${services.idol.urlget}")
    private String idolURLGet;

    @Value("${services.idol.urlpost}")
    private String idolURLPost;

    @Value("${services.idol.urltermsget}")
    private String idolURLTermGet;

    @Value("${services.idol.summarytype}")
    private String summaryType;

    @Override
    public IdolResponse queryDocsGet(String queryText) {
        //Method GET:
        IdolResponse idolResponse = restTemplate.getForObject(idolURLGet, IdolResponse.class, queryText);
        return idolResponse;
    }

    @Override
    public IdolResponse queryDocsPost(IdolRequest request) {
        //Method POST:
        MultiValueMap<String, Object> map = new LinkedMultiValueMap<>();
        map.add("text", request.getText());
        map.add("summary", request.getSummary());
        HttpEntity<MultiValueMap<String, Object>> entityRequest = new HttpEntity<>(map);   
        IdolResponse idolResponse = restTemplate.postForObject(idolURLPost, entityRequest, IdolResponse.class);
        return idolResponse;
    }

    @Override
    public IdolResponse queryTermsGet(String queryTextTerms) {
        //Method GET TermsExpands:
        IdolResponse idolResponse = restTemplate.getForObject(idolURLTermGet, IdolResponse.class, queryTextTerms);
        return idolResponse;
    }
    
}