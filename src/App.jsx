import React from 'react'
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import Chat from "./pages/Chat";
import Join from "./pages/Join";

const App = () => {
  return (
    <BrowserRouter >
      {/* <NavBar /> */}
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Join />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App