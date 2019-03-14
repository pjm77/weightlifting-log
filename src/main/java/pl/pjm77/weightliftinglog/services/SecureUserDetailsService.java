package pl.pjm77.weightliftinglog.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import pl.pjm77.weightliftinglog.models.SecureUserDetails;
import pl.pjm77.weightliftinglog.models.User;
import pl.pjm77.weightliftinglog.repositories.UserRepository;

import java.util.Optional;

@Service
public class SecureUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public SecureUserDetailsService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        User user = userRepository.findUserByName(name);
        if(user == null) {
            throw new UsernameNotFoundException("User name not found!");
        }
        return new SecureUserDetails(user);
    }

    //    @Override
//    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
//        Optional<User> optionalUser = userRepository.findUserByName(name);
//        optionalUser.orElseThrow(() -> new UsernameNotFoundException("User name not found!"));
//        return optionalUser
//                .map(SecureUserDetails::new).get();
//    }
}