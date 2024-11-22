package com.example.furniture_rentalgpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.furniture_rentalgpt.model.Furniture;
import com.example.furniture_rentalgpt.repository.FurnitureRepository;

import java.util.List;
import java.util.Optional;

@Service
public class FurnitureService {

    private final FurnitureRepository furnitureRepository;

    @Autowired
    public FurnitureService(FurnitureRepository furnitureRepository) {
        this.furnitureRepository = furnitureRepository;
    }

    // Retrieve all furniture items
    public List<Furniture> getAllFurniture() {
        return furnitureRepository.findAll();
    }

    // Retrieve a single furniture item by ID
    public Optional<Furniture> getFurnitureById(Long id) {
        return furnitureRepository.findById(id);
    }

    // Add a new furniture item
    public Furniture addFurniture(Furniture furniture) {
        return furnitureRepository.save(furniture);
    }

    // Update an existing furniture item
    public Furniture updateFurniture(Long id, Furniture updatedFurniture) {
        return furnitureRepository.findById(id).map(furniture -> {
            furniture.setName(updatedFurniture.getName());
            furniture.setDescription(updatedFurniture.getDescription());
            furniture.setRentalDuration(updatedFurniture.getRentalDuration());
            furniture.setSecurityDeposit(updatedFurniture.getSecurityDeposit());
            furniture.setRentalPrice(updatedFurniture.getRentalPrice());
            furniture.setCategory(updatedFurniture.getCategory());  // Update category
            return furnitureRepository.save(furniture);
        }).orElseThrow(() -> new RuntimeException("Furniture not found"));
    }

    // Delete a furniture item by ID
    public void deleteFurniture(Long id) {
        if (furnitureRepository.existsById(id)) {
            furnitureRepository.deleteById(id);
        } else {
            throw new RuntimeException("Furniture not found");
        }
    }
}
