package com.example.musicstreaming;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.musicstreaming.model.Song;
import com.example.musicstreaming.repository.SongRepository;

@SpringBootApplication
public class MusicstreamingApplication {

    public static void main(String[] args) {
        SpringApplication.run(MusicstreamingApplication.class, args);
    }

    @Bean
    CommandLineRunner initDatabase(SongRepository songRepository) {
        return args -> {
            songRepository.save(new Song("Song 1", "Artist 1", "Album 1", 200));
            songRepository.save(new Song("Song 2", "Artist 2", "Album 2", 180));
            songRepository.save(new Song("Song 3", "Artist 3", "Album 3", 210));
        };
    }
}
