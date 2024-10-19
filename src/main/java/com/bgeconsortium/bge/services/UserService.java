package com.bgeconsortium.bge.services;

import com.bgeconsortium.bge.UserRepository;
import com.bgeconsortium.bge.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService
{
    @Autowired
    public UserRepository userRepository;

    public User createUser(User user)
    {
        return userRepository.save(user);
    }
}
