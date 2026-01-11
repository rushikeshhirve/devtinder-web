import Body from "./components/Body.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login.jsx"
import Profile from "./components/Profile.jsx"
import appStore from "./utils/appStore.js"
import Feed from "./components/Feed.jsx"
import { Provider } from "react-redux"
import Connection from "./components/Connection.jsx"
import Request from "./components/Requests.jsx"

function App() {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element ={<Body/>}>
            <Route path="/" element={<Feed/>} />
            <Route path ="/login" element ={<Login/>}/>
            <Route path ="/profile" element ={<Profile/>}/>
            <Route path ="/connections" element ={<Connection/>}/>
            <Route path ="/requests" element ={<Request/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>      
    </>
  )
}

export default App
