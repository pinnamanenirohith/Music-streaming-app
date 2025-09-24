// src/services/songService.js

export async function fetchSongs() {
  try {
    const response = await fetch("http://localhost:8080/api/songs"); // backend URL
    if (!response.ok) {
      throw new Error("Failed to fetch songs");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching songs:", error);
    return [];
  }
}
