const API_URL = "http://localhost:8080/api/songs";

export const getSongs = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch songs");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addSong = async (song) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(song),
    });
    if (!response.ok) throw new Error("Failed to add song");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};
