package com.example.furniture_rentalgpt.model;

import java.util.List;

public class RentalRequest {
    private List<Long> cartItemIds;

    // Getters and Setters
    public List<Long> getCartItemIds() {
        return cartItemIds;
    }

    public void setCartItemIds(List<Long> cartItemIds) {
        this.cartItemIds = cartItemIds;
    }
}
