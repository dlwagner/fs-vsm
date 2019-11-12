package com.example.accessingdatamysql;

import org.springframework.data.repository.CrudRepository;
import com.example.accessingdatamysql.User;

//This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
//CRUD refers Create, Read, Update, Delete

/*
 *  Spring automatically implements this repository interface 
 *  in a bean that has the same name - userRepository
 */

public interface UserRepository extends CrudRepository<User, Integer> {

}
