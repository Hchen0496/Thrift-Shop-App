package com.api.thrift.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "STORE")
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "STORE_NAME")
    private String storeName;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "CITY")
    private String city;

    @Column(name = "STATE")
    private String state;

    @Column(name = "ZIP_CODE")
    private int zipCode;

    public Store() {}

    public Store(int id, int fid, String storeName, 
            String address, String city, String state,
            int zipCode) {
        this.id = id;
        this.storeName = storeName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode; 
    }

    
    public int getId() {
        return id;
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

