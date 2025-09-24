import { useState } from "react";
import SongList from "./components/SongList";
import AddSongForm from "./components/AddSongForm";
import "./App.css";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleSongAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Music Streaming App</h1>
      <AddSongForm onSongAdded={handleSongAdded} />
      <SongList refresh={refresh} />
    </div>
  );
}

export default App;
