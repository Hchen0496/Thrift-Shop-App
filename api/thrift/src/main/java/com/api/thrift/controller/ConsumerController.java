package com.api.thrift.controller;

import java.util.Collection;

import com.api.thrift.model.*;
import com.api.thrift.service.ConsumerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RequestMapping("api/thrift/consumer")
@RestController
public class ConsumerController {
    
    @Autowired  
    private ConsumerService consumerService;

    public ConsumerController(ConsumerService consumerService) {
        this.consumerService = consumerService;
    }

    @RequestMapping(method=RequestMethod.GET)
    public Collection<Consumer> getAllConsumers() {
        return consumerService.getAllConsumers();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET) 
    public Consumer getConsumerById(@PathVariable("id") Integer id) {
        return consumerService.getConsumerById(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void deleteConsumerById(@PathVariable("id") Integer id) {
        consumerService.removeConsumerById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void updateConsumerById(@RequestBody Consumer newConsumer, @PathVariable("id") Integer id){
        consumerService.replaceConsumer(newConsumer, id);
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void insertConsumer(@RequestBody Consumer newConsumer) {
        consumerService.addNewConsumer(newConsumer);
    }    
}