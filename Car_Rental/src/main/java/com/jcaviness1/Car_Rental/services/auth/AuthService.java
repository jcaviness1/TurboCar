package com.jcaviness1.Car_Rental.services.auth;

import com.jcaviness1.Car_Rental.dto.SignupRequest;
import com.jcaviness1.Car_Rental.dto.UserDto;

public interface AuthService {

    UserDto createCustomer(SignupRequest signupRequest);

    boolean hasCustomerWithEmail(String email);

}
