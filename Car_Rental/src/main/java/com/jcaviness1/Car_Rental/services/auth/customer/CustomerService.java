package com.jcaviness1.Car_Rental.services.auth.customer;

import com.jcaviness1.Car_Rental.dto.BookACarDto;
import com.jcaviness1.Car_Rental.dto.CarDto;
import com.jcaviness1.Car_Rental.dto.CarDtoListDto;
import com.jcaviness1.Car_Rental.dto.SearchCarDto;

import javax.swing.*;
import java.util.List;

public interface CustomerService {

    List<CarDto> getAllCars();

    boolean bookACar(BookACarDto bookACarDto);

    CarDto getCarById(Long carId);

    List<BookACarDto> getBookingsByUserId(Long userId);

    CarDtoListDto searchCar(SearchCarDto searchCarDto);

}
