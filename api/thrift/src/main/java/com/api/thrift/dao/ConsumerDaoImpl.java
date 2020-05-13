package com.api.thrift.dao;

import java.util.List;
//import java.util.HashMap;

import com.api.thrift.model.Consumer;
import com.api.thrift.dao.ConsumerDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Qualifier;


@Component
public class ConsumerDaoImpl {

    @Autowired
    private ConsumerDao consumerDao;

    public List<Consumer> listConsumers() {
        return this.consumerDao.findAll();
    }

    public Consumer addConsumer(Consumer newConsumer) {
        return this.consumerDao.save(newConsumer);
    }

    public Consumer getConsumer(Integer id) {
        return this.consumerDao.findById(id)
            .orElseThrow();
    }

    public Consumer updateConsumer(Consumer newConsumer, Integer id) {
        return this.consumerDao.findById(id)
            .map(c -> {
                c.setFirstName(newConsumer.getFirstName());
                c.setLastName(newConsumer.getLastName());
                c.setEmail(newConsumer.getEmail());
                c.setUsername(newConsumer.getLastName());
                c.setPassword(newConsumer.getPassword());
                return this.consumerDao.save(newConsumer);
            }).orElseGet(() -> {
                newConsumer.setId(id);
                return this.consumerDao.save(newConsumer);
            });
    }

    public void deleteConsumer(Integer id) {
        this.consumerDao.deleteById(id);
    }
}