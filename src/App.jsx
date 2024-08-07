import { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css'


function App() {

  const [theme, setTheme] = useState('light')

  return (
    <>
    <div className='w-full min-h-screen relative bg-gray-950'>
      <ToastContainer />
      <Header theme = {theme} />
      <Outlet />
      {/* <Footer theme = {theme}/> */}
    </div>
    </>
  )
}

export default App
