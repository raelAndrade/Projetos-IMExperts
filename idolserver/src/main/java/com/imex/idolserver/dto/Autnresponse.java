package com.imex.idolserver.dto;

import lombok.Data;

/**
 * Autnresponse
 */
@Data
public class Autnresponse {

    private Value action;
    private Value response;
    private Responsedata responsedata;
       
}