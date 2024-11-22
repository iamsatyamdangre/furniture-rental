package com.example.furniture_rentalgpt.service;

import com.example.furniture_rentalgpt.model.CartItem;
import com.example.furniture_rentalgpt.model.Furniture;
import com.example.furniture_rentalgpt.repository.CartItemRepository;
import com.example.furniture_rentalgpt.repository.FurnitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private FurnitureRepository furnitureRepository;

    public CartItem addItemToCart(Long furnitureId, int quantity) {
        Furniture furniture = furnitureRepository.findById(furnitureId)
                            .orElseThrow(() -> new RuntimeException("Furniture not found"));

        CartItem cartItem = new CartItem();
        cartItem.setFurniture(furniture);
        cartItem.setQuantity(quantity);
        cartItem.setCartItemName(furniture.getName());
        cartItem.setRentalDuration(furniture.getRentalDuration());  // Default or passed rental duration
        cartItem.setPrice(furniture.getRentalPrice());  // Fetch the price from Furniture

        return cartItemRepository.save(cartItem);
    }

    public List<CartItem> getAllCartItems() {
        return cartItemRepository.findAll();  // Price will be included here
    }

    public void deleteCartItem(Long cartItemId) {
        cartItemRepository.deleteById(cartItemId);
    }
}
