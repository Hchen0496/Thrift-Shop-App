package com.api.thrift.model;

import java.util.Date;

// import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
// import javax.persistence.JoinColumn;
// import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "ITEM")
public class Item {

    @Id
    @Column(name = "ITEM_ID")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "ITEM_NAME")
    private String itemName;

    @Column(name = "DESCRIPTION")
    private String desc;
    
    @Column(name = "PRICE")
    private Long price;

    @Temporal(TemporalType.DATE)
    @Column(name = "DATE_POSTED")
    private Date itemPosDate;

    private Store store;

    public Item() {}

    public Item(Integer id, String itemName, 
                String desc, Long price, Date itemPosDate) {
            this.id = id;
            this.itemName = itemName;
            this.desc = desc;
            this.price = price;
            this.itemPosDate = itemPosDate;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    public int getId() {
        return id;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }
    public String getItemName() {
        return itemName;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
    public String getDesc() {
        return desc;
    }

    public void setPrice(Long price) {
        this.price = price;
    }
    public Long getPrice() {
        return price;
    }

    public void setItemPosted(Date itemPosDate) {
        this.itemPosDate = itemPosDate;
    }
    public Date getItemPosted() {
        return itemPosDate;
    }

    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "STORE_ID")
    public void setStore(Store store) {
        this.store = store;
    }

    public Store getStore() {
        return store;
    }
    
}