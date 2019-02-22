package com.imex.idolserver.service;

import com.imex.idolserver.dto.IdolRequest;
import com.imex.idolserver.dto.IdolResponse;

/**
 * IdolServerService
 */
public interface IdolServerService {

    public IdolResponse queryDocsGet(String request);

    public IdolResponse queryDocsPost(IdolRequest request);

    public IdolResponse queryTermsGet(String request);

    
}