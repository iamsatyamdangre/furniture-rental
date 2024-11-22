package com.example.furniture_rentalgpt.controller;

import com.example.furniture_rentalgpt.model.CartItem;
import com.example.furniture_rentalgpt.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("http://localhost:4200")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<CartItem> addItemToCart(@RequestParam Long furnitureId, @RequestParam int quantity) {
        CartItem cartItem = cartService.addItemToCart(furnitureId, quantity);
        return new ResponseEntity<>(cartItem, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public List<CartItem> getAllCartItems() {
        return cartService.getAllCartItems();  // Price is included here
    }

    @DeleteMapping("/delete/{cartItemId}")
    public ResponseEntity<String> deleteCartItem(@PathVariable Long cartItemId) {
        cartService.deleteCartItem(cartItemId);
        return new ResponseEntity<>("Item deleted from cart", HttpStatus.OK);
    }
}
