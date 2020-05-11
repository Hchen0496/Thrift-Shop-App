package com.api.thrift.model;

public class Merchant {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    public Merchant(int id, String firstName, String lastName, String email, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    
    public int getId(){
        return id;
    }
    public String getFirstName() {
        return firstName;
    }

    
    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }
    
    public String getPassword() {
        return password;
    }
}