package com.jcaviness1.Car_Rental.dto;
import com.jcaviness1.Car_Rental.enums.UserRole;
import lombok.Data;


@Data
public class UserDto {

    private Long id;
    private String name;
    private String email;
    private UserRole userRole;
}
