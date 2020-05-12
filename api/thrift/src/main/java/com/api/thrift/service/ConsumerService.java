package com.api.thrift.service;

import java.util.List;

import com.api.thrift.dao.ConsumerDaoImpl;
import com.api.thrift.model.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class ConsumerService {
    
    @Autowired
    private ConsumerDaoImpl consumerDaoImpl;
 
    /*public ConsumerService(ConsumerDao consumerDao) {
        this.consumerDao = consumerDao;
    }*/

    public List<Consumer> getAllConsumers() {
        return this.consumerDaoImpl.listConsumers();
    }

    public Consumer getConsumerById(Integer id) {
        return this.consumerDaoImpl.getConsumer(id);
    }

    public Consumer addNewConsumer(Consumer newConsumer) {
        return this.consumerDaoImpl.addConsumer(newConsumer);
    }

    public void removeConsumerById(Integer id) {
        this.consumerDaoImpl.deleteConsumer(id);
    }

    public Consumer replaceConsumer(Consumer newConsumer, Integer id) {
        return this.consumerDaoImpl.updateConsumer(newConsumer, id);
    }

    public void deleteConsumer(Integer id) {
        this.consumerDaoImpl.deleteConsumer(id);
    }
}

