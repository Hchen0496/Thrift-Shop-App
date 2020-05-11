package com.api.thrift.service;

import java.util.Collection;

import com.api.thrift.dao.ConsumerDao;
import com.api.thrift.model.Consumer;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service("consumerService")
public class ConsumerService {
    
    @Autowired
    private ConsumerDao consumerDao;
 
    /*public ConsumerService(ConsumerDao consumerDao) {
        this.consumerDao = consumerDao;
    }*/

    public Collection<Consumer> getAllConsumers() {
        return this.consumerDao.getConsumers();
    }

    public Consumer getConsumerById(Integer consumerId) {
        return this.consumerDao.getConsumerById(consumerId);
    }

    public void removeConsumerById(Integer consumerId) {
        this.consumerDao.removeConsumerById(consumerId);
    }

    public void updateConsumer(Consumer consumer) {
        this.consumerDao.updateConsumer(consumer);
    }

    public void insertConsumer(Consumer consumer) {
        this.consumerDao.insertConsumerToDB(consumer);
    }
}

