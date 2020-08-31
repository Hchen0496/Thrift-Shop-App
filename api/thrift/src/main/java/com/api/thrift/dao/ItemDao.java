package com.api.thrift.dao;

import com.api.thrift.model.Item;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemDao extends JpaRepository<Item, Integer> {
    
}