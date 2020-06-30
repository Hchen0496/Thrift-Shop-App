package com.api.thrift.dao;

import com.api.thrift.model.Manager;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ManagerDao extends JpaRepository<Manager, Integer>{
    
}