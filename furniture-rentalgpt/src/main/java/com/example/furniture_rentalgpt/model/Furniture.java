package com.example.furniture_rentalgpt.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "furniture")
public class Furniture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotBlank(message = "Description is mandatory")
    private String description;

    @NotNull(message = "Rental duration is mandatory")
    private Integer rentalDuration;

    @NotNull(message = "Security deposit is mandatory")
    private Double securityDeposit;

    private String imageUrl;

    @NotNull
    private Integer quantityAvailable;

    @NotNull(message = "Rental price is mandatory")
    private Double rentalPrice;

    private String category;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Integer getRentalDuration() { return rentalDuration; }
    public void setRentalDuration(Integer rentalDuration) { this.rentalDuration = rentalDuration; }

    public Double getSecurityDeposit() { return securityDeposit; }
    public void setSecurityDeposit(Double securityDeposit) { this.securityDeposit = securityDeposit; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public Integer getQuantityAvailable() { return quantityAvailable; }
    public void setQuantityAvailable(Integer quantityAvailable) { this.quantityAvailable = quantityAvailable; }

    public Double getRentalPrice() { return rentalPrice; }
    public void setRentalPrice(Double rentalPrice) { this.rentalPrice = rentalPrice; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
}
