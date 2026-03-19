import { useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation, useLoaderData } from 'react-router-dom'
import './App.css'

function App() {
  const [user, setUser] = useState(useLoaderData())
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    let nullUserUrls = ["/"];
    let isAllowed = nullUserUrls.includes(location.pathname);
    if (user && isAllowed) {
      navigate("/home");
    } else if (!user && !isAllowed) {
      navigate("/");
    } 
  }, [location.pathname, user]);

  return (
    <>
     <Outlet context={{ user, setUser }}/>
    </>
  )
}

export default App