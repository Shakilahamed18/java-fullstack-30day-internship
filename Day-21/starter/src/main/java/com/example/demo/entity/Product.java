package com.example.demo.entity;

import jakarta.persistence.*;

@Entity @Table(name = "products")
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    @Column(nullable = false) private String name;
    private String description;
    @Column(nullable = false) private Double price;
    private String category;

    public Product() {}
    public Long getId() { return id; } public void setId(Long id) { this.id = id; }
    public String getName() { return name; } public void setName(String n) { this.name = n; }
    public String getDescription() { return description; } public void setDescription(String d) { this.description = d; }
    public Double getPrice() { return price; } public void setPrice(Double p) { this.price = p; }
    public String getCategory() { return category; } public void setCategory(String c) { this.category = c; }
}
