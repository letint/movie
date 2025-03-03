import { getMovies } from "./movieActions";
import { mapMovieToDTO } from "@/utils/dto";
import { Movie } from "@/types/movie";

process.env.TMBD_API_URL = "https://mock-tmdb-api.com";
process.env.TMDB_API_KEY = "mock_api_key";

const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Mock Movie 1",
    overview: "A great movie",
    release_date: "2024-03-01",
    poster_path: "/mock1.jpg",
    vote_average: 8.5,
  },
  {
    id: 2,
    title: "Mock Movie 2",
    overview: "Another great movie",
    release_date: "2024-03-02",
    poster_path: "/mock2.jpg",
    vote_average: 9.0,
  },
];

describe("getMovies", () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
  });

  beforeEach(() => jest.clearAllMocks());

  it("fetches and returns a mapped list of movies on success", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ results: mockMovies }),
    });

    const movies = await getMovies();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(movies).toEqual(mockMovies.map(mapMovieToDTO));
  });

  it("returns an empty array when fetch fails", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Fetch error"));

    await expect(getMovies()).resolves.toEqual([]);
  });

  it("returns an empty array when response is not OK", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: async () => ({}),
    });

    await expect(getMovies()).resolves.toEqual([]);
  });
});
