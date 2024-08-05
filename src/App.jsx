import { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import AddNote from './components/addNote/AddNote';
import './App.css'


function App() {

  const [theme, setTheme] = useState('light')

  return (
    <>
    <div className='w-full min-h-screen relative'>
      <Header theme = {theme} />
      <AddNote />
      {/* <Footer theme = {theme}/> */}
    </div>
    </>
  )
}

export default App
