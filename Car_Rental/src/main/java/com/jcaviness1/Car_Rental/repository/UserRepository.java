package com.jcaviness1.Car_Rental.repository;


import com.jcaviness1.Car_Rental.entity.User;
import com.jcaviness1.Car_Rental.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User>findFirstByEmail(String email);

    User findByUserRole(UserRole userRole);
}
