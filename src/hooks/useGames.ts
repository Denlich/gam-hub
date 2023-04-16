import apiClient from "../services/api-client";
import { useState, useEffect } from "react";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FethcGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErorr] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FethcGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setErorr(err.message)});

    return () => controller.abort();
  }, []);

  return { games, error};
} 

export default useGames;