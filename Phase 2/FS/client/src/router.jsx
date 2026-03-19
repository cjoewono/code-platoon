import { createBrowserRouter } from 'react-router-dom'
import { userConfirmation } from './utilities' 
import AuthPage from "./pages/AuthPage"
import HomePage from "./pages/HomePage"
import App from "./App"

const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        loader: userConfirmation,
        children:[
            {
                index:true,
                element:<AuthPage/>
            },
            {
                path:"home",
                element: <HomePage />
            }
        ]
    }
])

export default router