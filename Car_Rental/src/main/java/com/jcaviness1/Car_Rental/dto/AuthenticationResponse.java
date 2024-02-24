package com.jcaviness1.Car_Rental.dto;

import com.jcaviness1.Car_Rental.enums.UserRole;
import lombok.Data;

@Data

public class AuthenticationResponse {

    private String jwt;
    private UserRole userRole;
    private Long userId;
}
