// IMPORTS
import { RouterProvider } from "react-router";
import { router } from "./routes"; 
import "./styles/main.css"

// MY-CODE
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

// EXPORT
export default App;