import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage"
import TeamPage from "./pages/TeamPage"
import MissingPokemon from "./pages/MissingPokemonPage"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'pokemon/:id',
        element: <PokemonPage />
      },
      {
        path: 'team',
        element: <TeamPage />
      },
      {
        path: 'missing-pokemon/:query',
        element: <MissingPokemon />
      }
    ],
  },
]);

export default router;
