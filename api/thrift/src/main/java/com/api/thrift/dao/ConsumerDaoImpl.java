package com.api.thrift.dao;

import java.util.Collection;
//import java.util.HashMap;
import java.util.Map;

import com.api.thrift.model.Consumer;
import com.api.thrift.dao.ConsumerDao;

import org.springframework.stereotype.Component;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;


@Component
public class ConsumerDaoImpl implements ConsumerDao {

    private Map<Integer, Consumer> consumers;

    /*@Autowired
    public ConsumerDataAccessService(Map<Integer,Consumer> consumers){
        this.consumers = consumers;
    }*/

    @Override
    public Collection<Consumer> getConsumers() {
        return this.consumers.values();
    }

    @Override
    public Consumer getConsumerById(Integer consumerId) {
        return this.consumers.get(consumerId);
    }

    @Override
    public void removeConsumerById(Integer consumerId) {
        this.consumers.remove(consumerId);
    }

    @Override
    public void updateConsumer(Consumer consumer) {
        Consumer c = consumers.get(consumer.getId());
        c.setEmail(consumer.getEmail());
        c.setFirstName(consumer.getFirstName());
        c.setLastName(consumer.getLastName());
        c.setUsername(consumer.getUsername());
        c.setUsername(consumer.getPassword());
    }

    @Override
    public void insertConsumerToDB(Consumer consumer) {
        this.consumers.put(consumer.getId(), consumer);
    }
 
}