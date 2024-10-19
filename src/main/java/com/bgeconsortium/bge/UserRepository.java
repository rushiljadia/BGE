package com.bgeconsortium.bge;

import com.bgeconsortium.bge.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String>
{
}
