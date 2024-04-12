import './App.css'
import React, { useState } from 'react'
import Modal from './Modal'

const App = () => {

  const [open, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(true)
  }

  const closePopup = () => {
    setOpen(false)
  }

  return (
    <div className='app'>
      <button onClick={openPopup}>Open</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptas nesciunt blanditiis soluta iusto nam doloribus voluptate modi repellat cupiditate.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptas nesciunt blanditiis soluta iusto nam doloribus voluptate modi repellat cupiditate.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptas nesciunt blanditiis soluta iusto nam doloribus voluptate modi repellat cupiditate.</p>
      <Modal open={open} close={closePopup} />
    </div>
  )
}

export default App