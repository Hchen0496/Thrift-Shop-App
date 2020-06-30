package com.api.thrift.model;

// import javax.persistence.CascadeType;
import javax.persistence.Entity;
// import javax.persistence.JoinColumn;
// import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "MANAGER")
public class Manager {
    
    private Long id;
    private String firstName;
    private String lastName;

    private Store store;

    public Manager() {}

    public Manager(Long id, String firstName, String lastName){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getFirstName() {
        return firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getLastName() {
        return lastName;
    }

    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "STORE_NAME")
    public void setStore(Store store) {
        this.store = store;
    }
    public Store getStore() {
        return store;
    }
}