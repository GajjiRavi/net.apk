package com.example.netflixclone.repository;

import com.example.netflixclone.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findByCategory(String category);
}