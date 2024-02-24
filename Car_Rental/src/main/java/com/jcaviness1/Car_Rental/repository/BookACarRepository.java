package com.jcaviness1.Car_Rental.repository;

import com.jcaviness1.Car_Rental.dto.BookACarDto;
import com.jcaviness1.Car_Rental.entity.BookACar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface BookACarRepository extends JpaRepository<BookACar,Long> {
    List<BookACar> findAllByUserId(Long userId);
}
