package com.api.thrift.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "THRIFT_STORES")
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    
    private int fid;
    private String storeName;
    private String address;
    private String city;
    private String state;
    private int zipCode;

    public Store(int id, int fid, String storeName, 
            String address, String city, String state,
            int zipCode) {
        this.id = id;
        this.fid = fid;
        this.storeName = storeName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode; 
    }

    public int getId() {
        return id;
    }
    
    public int getFID() {
        return fid;
    }
    public String getStoreName() {
        return storeName;
    }
    public String getAddress() {
        return address;
    }
    public String getCity() {
        return city;
    }
    public String getState() {
        return state;
    }
    public int getZipCode() {
        return zipCode;
    }
}

