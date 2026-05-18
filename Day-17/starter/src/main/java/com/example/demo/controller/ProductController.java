package com.example.demo.controller;

import com.example.demo.model.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final List<Product> products = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong(1);

    public ProductController() {
        products.add(new Product(counter.getAndIncrement(), "Laptop", "High-performance laptop", 999.99, "Electronics"));
        products.add(new Product(counter.getAndIncrement(), "Headphones", "Noise-cancelling headphones", 199.99, "Electronics"));
        products.add(new Product(counter.getAndIncrement(), "Backpack", "Durable travel backpack", 79.99, "Accessories"));
    }

    @GetMapping
    public List<Product> getAll(@RequestParam(required = false) String search) {
        if (search != null && !search.isBlank())
            return products.stream().filter(p -> p.getName().toLowerCase().contains(search.toLowerCase())).toList();
        return products;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable Long id) {
        return products.stream().filter(p -> p.getId().equals(id)).findFirst()
                .map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Product> create(@RequestBody Product product) {
        product.setId(counter.getAndIncrement());
        products.add(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> update(@PathVariable Long id, @RequestBody Product updated) {
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getId().equals(id)) {
                updated.setId(id);
                products.set(i, updated);
                return ResponseEntity.ok(updated);
            }
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        boolean removed = products.removeIf(p -> p.getId().equals(id));
        return removed ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
