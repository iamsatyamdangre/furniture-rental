package com.example.furniture_rentalgpt.repository;

import com.example.furniture_rentalgpt.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}
