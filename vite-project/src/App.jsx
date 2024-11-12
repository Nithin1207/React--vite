import React from 'react'
import { useState } from 'react'
import LogoSection from "./components/logo.jsx"
import CountNumber from "./components/countNumber.jsx"
import DropDownMenu from "./components/dropDownMenu.jsx"
import './App.css'
import { EXAMPLES } from './data.js'

function App() {



  return (
    <>
      <LogoSection />

      <h1>Vite + React</h1>

      <CountNumber />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <DropDownMenu />



    </>
  );
}

export default App
