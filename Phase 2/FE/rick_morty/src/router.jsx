import App from "./App"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CharactersPage from "./pages/CharactersPage"
import CharacterDetailsPage from "./pages/CharacterDetailsPage"
import NotFoundPage from "./pages/NotFoundPage"
import ErrorPage from "./pages/ErrorPage"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: 'about',
            element: <AboutPage />
        },
        {
            path: 'characters',
            element: <CharactersPage />
        },
        {
            path: 'characters/:id',
            element: <CharacterDetailsPage />
        },
        {
            path: '*',
            element: <NotFoundPage />
        }
    ]
}])
export default router