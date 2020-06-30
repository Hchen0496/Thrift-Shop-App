package com.api.thrift.dao;

import com.api.thrift.model.Store;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreDao extends JpaRepository<Store, Long> {
    
}