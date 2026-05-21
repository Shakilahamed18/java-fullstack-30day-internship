package com.example.demo.service;

import com.example.demo.dto.ProductRequestDTO;
import com.example.demo.dto.ProductResponseDTO;
import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repo;
    public ProductService(ProductRepository repo) { this.repo = repo; }

    public List<ProductResponseDTO> getAll() {
        return repo.findAll().stream().map(this::toResponse).toList();
    }

    public ProductResponseDTO getById(Long id) {
        Product p = repo.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        return toResponse(p);
    }

    public ProductResponseDTO create(ProductRequestDTO dto) {
        Product p = new Product();
        p.setName(dto.getName()); p.setDescription(dto.getDescription());
        p.setPrice(dto.getPrice()); p.setCategory(dto.getCategory());
        return toResponse(repo.save(p));
    }

    private ProductResponseDTO toResponse(Product p) {
        return new ProductResponseDTO(p.getId(), p.getName(), p.getDescription(), p.getPrice(), p.getCategory());
    }
}
