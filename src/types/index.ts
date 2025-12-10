export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

export interface APIResponse {
  Search: Movie[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}
