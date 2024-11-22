package com.example.furniture_rentalgpt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.furniture_rentalgpt.model.Furniture;

@Repository
public interface FurnitureRepository extends JpaRepository<Furniture, Long> {
    
}