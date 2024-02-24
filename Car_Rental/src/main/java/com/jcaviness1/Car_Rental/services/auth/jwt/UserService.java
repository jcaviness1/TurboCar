package com.jcaviness1.Car_Rental.services.auth.jwt;


import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService {

    UserDetailsService userDetailsService();
}
