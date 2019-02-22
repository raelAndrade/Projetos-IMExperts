package com.imex.idolserver.controller;

import com.imex.idolserver.dto.IdolRequest;
import com.imex.idolserver.dto.IdolResponse;
import com.imex.idolserver.service.IdolServerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
public class IdolServerController {
    
    @Autowired
	private IdolServerService idolService;
    
    @GetMapping(value="/services/idol/query/{queryText}")
	public ResponseEntity<IdolResponse> queryDocsGet(@PathVariable String queryText) {
        IdolResponse idolResponse = idolService.queryDocsGet(queryText);
        return ResponseEntity.ok(idolResponse);
    }

    @PostMapping(value="/services/idol/query")
	public ResponseEntity<IdolResponse> queryDocsPost(@RequestBody IdolRequest idolRequest) {
        IdolResponse idolResponse = idolService.queryDocsPost(idolRequest);
        return ResponseEntity.ok(idolResponse);
    }
    
    @GetMapping(value="/services/idol/termexpand/{queryTextTerm}")
	public ResponseEntity<IdolResponse> queryTermsGet(@PathVariable String queryTextTerm) {
        IdolResponse idolResponse = idolService.queryTermsGet(queryTextTerm);
        System.out.println("teste : " + idolResponse.toString());
        return ResponseEntity.ok(idolResponse);
    }

}