package com.api.thrift.dao;

//import org.springframework.stereotype.Repository;

import java.util.Collection;

import com.api.thrift.model.Consumer;

public interface ConsumerDao {     
    Collection<Consumer> getConsumers();

    Consumer getConsumerById(Integer consumerId);

    void removeConsumerById(Integer consumerId);

    void updateConsumer(Consumer consumer);

    void insertConsumerToDB(Consumer consumer);
}