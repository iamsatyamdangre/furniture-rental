package com.example.furniture_rentalgpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.furniture_rentalgpt.model.Furniture;
import com.example.furniture_rentalgpt.service.FurnitureService;

import jakarta.validation.Valid;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/furniture")
@CrossOrigin("http://localhost:4200")
public class FurnitureController {

    private final FurnitureService furnitureService;

    @Autowired
    public FurnitureController(FurnitureService furnitureService) {
        this.furnitureService = furnitureService;
    }

    // Endpoint to get all furniture items
    // @GetMapping("/all")
    // public ResponseEntity<Map<String, Object>> getAllFurniture() {
    //     List<Furniture> furnitureList = furnitureService.getAllFurniture();
    //     // Map<String, Object> response = new HashMap<>();
    //     // response.put("message", "Furniture list retrieved successfully");
    //     // response.put("data", furnitureList);
    //     //return ResponseEntity.ok(response);
    // }

    @GetMapping("/all")
    public List<Furniture> getAllFurnitures(){
        return furnitureService.getAllFurniture();
    }

    // Endpoint to get a single furniture item by ID
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getFurnitureById(@PathVariable Long id) {
        Optional<Furniture> furniture = furnitureService.getFurnitureById(id);
        Map<String, Object> response = new HashMap<>();
        if (furniture.isPresent()) {
            response.put("message", "Furniture retrieved successfully");
            response.put("data", furniture.get());
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Furniture not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    // Endpoint to add a new furniture item
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> addFurniture(@RequestBody Furniture furniture) {
        Furniture savedFurniture = furnitureService.addFurniture(furniture);
        Map<String, Object> response = new HashMap<>();
        response.put("message", "Furniture added successfully");
        response.put("data", savedFurniture);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    // Endpoint to update an existing furniture item
    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> updateFurniture(@PathVariable Long id, @Valid @RequestBody Furniture updatedFurniture) {
        Map<String, Object> response = new HashMap<>();
        try {
            Furniture furniture = furnitureService.updateFurniture(id, updatedFurniture);
            response.put("message", "Furniture updated successfully");
            response.put("data", furniture);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            response.put("message", "Furniture not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }

    // Endpoint to delete a furniture item by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteFurniture(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            furnitureService.deleteFurniture(id);
            response.put("message", "Furniture deleted successfully");
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            response.put("message", "Furniture not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }
}
