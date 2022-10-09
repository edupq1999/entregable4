import React from 'react'
import './styles/showForm.css'

const ShowForm = ({setShowForm, showForm}) => {

  return (
    <div className='add_user' onClick={() => (setShowForm(!showForm))}>
        <i className="fa-solid fa-plus"></i>
    </div>
  )
}

export default ShowForm