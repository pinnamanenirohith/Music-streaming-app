package com.example.musicstreaming.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.musicstreaming.model.Song;

public interface SongRepository extends JpaRepository<Song, Long> {
}
