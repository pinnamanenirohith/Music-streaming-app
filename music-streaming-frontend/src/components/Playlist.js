import { useState } from "react";
import { addSong } from "../services/songService";

function AddSongForm({ onSongAdded }) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSong = { title, artist, album, duration: parseInt(duration) };
    const addedSong = await addSong(newSong);
    if (addedSong) onSongAdded(addedSong);
    setTitle(""); setArtist(""); setAlbum(""); setDuration("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Artist" value={artist} onChange={e => setArtist(e.target.value)} />
      <input placeholder="Album" value={album} onChange={e => setAlbum(e.target.value)} />
      <input placeholder="Duration" value={duration} onChange={e => setDuration(e.target.value)} />
      <button type="submit">Add Song</button>
    </form>
  );
}

export default AddSongForm;
