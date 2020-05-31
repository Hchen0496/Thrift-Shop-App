package com.api.thrift.dao;

//import org.springframework.stereotype.Repository;


import com.api.thrift.model.Consumer;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsumerDao extends JpaRepository<Consumer,Integer> {     
    
}