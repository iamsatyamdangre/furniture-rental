package com.example.furniture_rentalgpt.controller;

import com.example.furniture_rentalgpt.model.Rental;
import com.example.furniture_rentalgpt.model.RentalRequest;
import com.example.furniture_rentalgpt.service.RentalService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/rental")
@CrossOrigin("http://localhost:4200")
public class RentalController {

    @Autowired
    private RentalService rentalService;

    // to place a rental order
    @PostMapping("/place")
public ResponseEntity<List<Rental>> placeRentalOrder(@RequestBody RentalRequest rentalRequest) {
    List<Rental> rentals = rentalService.placeRentalOrder(rentalRequest);
    return new ResponseEntity<>(rentals, HttpStatus.CREATED);
}

}
