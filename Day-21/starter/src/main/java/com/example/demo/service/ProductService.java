package com.example.demo.service;

import com.example.demo.entity.Product;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repo;
    public ProductService(ProductRepository repo) { this.repo = repo; }

    public List<Product> getAll() { return repo.findAll(); }

    public Product getById(Long id) {
        return repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
    }

    public Product create(Product p) { return repo.save(p); }

    public void delete(Long id) {
        if (!repo.existsById(id)) throw new ResourceNotFoundException("Product not found with id: " + id);
        repo.deleteById(id);
    }
}
