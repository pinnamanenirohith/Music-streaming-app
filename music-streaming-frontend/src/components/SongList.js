import { useEffect, useState } from "react";
import { getSongs } from "../services/songService";
import "./styles/SongList.css";

function SongList({ refresh }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const data = await getSongs();
      setSongs(data);
    };
    fetchSongs();
  }, [refresh]);

  return (
    <div className="song-list">
      <h2>Song List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} - {song.artist} ({song.album}) | Duration: {song.duration}s
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
