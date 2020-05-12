package com.api.thrift.dao;

//import org.springframework.stereotype.Repository;

import java.util.Collection;

import com.api.thrift.model.Consumer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsumerDao extends JpaRepository<Consumer,Integer> {     
    
}