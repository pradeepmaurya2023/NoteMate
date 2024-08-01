import { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'


function App() {

  const [theme, setTheme] = useState('light')

  return (
    <>
    <div className='w-full min-h-screen  relative'>
      <Header theme = {theme} />
      <Footer theme = {theme}/>
    </div>
    </>
  )
}

export default App
