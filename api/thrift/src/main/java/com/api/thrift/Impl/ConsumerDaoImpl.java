package com.api.thrift.Impl;

import java.util.List;
//import java.util.HashMap;

import com.api.thrift.dao.ConsumerDao;
import com.api.thrift.model.Consumer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

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
    //1) get method to match email and password in order to login
  
    //2) handle the case where user trys to register under an email already exists
}