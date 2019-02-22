package com.imex.idolserver.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;

/**
 * Responsedata
 */
public class Responsedata {

    private Value numhits;
    private List<Responsehits> hits;

    // TermsExpand
    private List<Value> terms;
    private Value numTerms;

    @JsonGetter("numhits")
    public Value getNumhits() {
        return numhits;
    }

    @JsonSetter("autn:numhits")
    public void setNumhits(Value numhits) {
        this.numhits = numhits;
    }

    @JsonSetter("autn:hit")
    public void setHits(List<Responsehits> hits) {
        this.hits = hits;
    }

    @JsonGetter("hits")
    public List<Responsehits> getHits() {
        return hits;
    }

    /*----------------  TERMEXPEND ---------------*/
    @JsonGetter("terms")
    public List<Value> getTerms() {
        return terms;
    }

    @JsonSetter("autn:term")
    public void setTerms(List<Value> terms) {
        this.terms = terms;
    }

    @JsonGetter("numterms")
    public Value getNumTerms() {
        return numTerms;
    }

    @JsonSetter("autn:number_of_terms")
    public void setNumTerms(Value numTerms) {
        this.numTerms = numTerms;
    }

}