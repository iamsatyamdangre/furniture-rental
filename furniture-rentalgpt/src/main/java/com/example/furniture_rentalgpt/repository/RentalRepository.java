package com.example.furniture_rentalgpt.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.furniture_rentalgpt.model.Rental;

public interface RentalRepository extends JpaRepository<Rental, Long> {
}
