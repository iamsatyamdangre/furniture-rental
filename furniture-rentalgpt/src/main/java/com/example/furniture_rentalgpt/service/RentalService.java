package com.example.furniture_rentalgpt.service;

import com.example.furniture_rentalgpt.model.CartItem;
import com.example.furniture_rentalgpt.model.Rental;
import com.example.furniture_rentalgpt.model.RentalRequest;
import com.example.furniture_rentalgpt.repository.CartItemRepository;
import com.example.furniture_rentalgpt.repository.FurnitureRepository;
import com.example.furniture_rentalgpt.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RentalService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private RentalRepository rentalRepository;

    @Autowired
    private FurnitureRepository furnitureRepository;

    public List<Rental> placeRentalOrder(RentalRequest rentalRequest) {
        List<Rental> rentals = new ArrayList<>();

        for (Long cartItemId : rentalRequest.getCartItemIds()) {
            // Find cart item based on ID in RentalRequest
            CartItem cartItem = cartItemRepository.findById(cartItemId)
                    .orElseThrow(() -> new RuntimeException("Cart item not found"));

            Rental rental = new Rental();
            rental.setFurniture(cartItem.getFurniture());
            rental.setQuantity(cartItem.getQuantity());

            // Set price, name, and rental duration in the rental
            rental.setPrice(cartItem.getFurniture().getRentalPrice());
            rental.setFurnitureName(cartItem.getFurniture().getName());
            rental.setRentalDuration(cartItem.getFurniture().getRentalDuration());

            // Update furniture quantity
            var furniture = cartItem.getFurniture();
            furniture.setQuantityAvailable(furniture.getQuantityAvailable() - cartItem.getQuantity());
            furnitureRepository.save(furniture);

            // Save rental and remove item from cart
            cartItemRepository.delete(cartItem);
            rentals.add(rentalRepository.save(rental));
        }
        return rentals;
    }
}
