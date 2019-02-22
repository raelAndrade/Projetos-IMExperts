package com.imex.idolserver.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Value
 */
public class Value {

    private String value;

    public Value(){ }

    public Value(String value){
        this.value = value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @JsonProperty("$")
    public String getValue() {
        return value;
    }
    
}