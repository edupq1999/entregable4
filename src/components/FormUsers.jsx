import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'

const defaultValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: ''
}

const FormUsers = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setShowForm, showForm}) => {

    const {handleSubmit, register, reset} = useForm()

    const submit = data => {
        if (updateInfo){
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }else {
            createNewUser(data)
        }
        reset(defaultValues)
        setShowForm(!showForm)
    }

    const closeForm = () => {
        setShowForm(!showForm)
        setUpdateInfo()
    }

    useEffect(() => {
        if (updateInfo){
            reset(updateInfo)
        }
    }, [updateInfo])
    
  return (
    <form className='user_background' onSubmit={handleSubmit(submit)}>
        <div className='user_modal'>
            <i onClick={closeForm} className='fa-solid fa-x close_form'></i>
            <h2 className='user_modal_tittle'>{updateInfo ? 'Edit user' : 'New user'}</h2>
            <div className='user_modal_input'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' {...register('email')}/>
            </div>
            <div className='user_modal_input'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' {...register('password')}/>
            </div>
            <div className='user_modal_input'>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id='first_name' {...register('first_name')}/>
            </div>
            <div className='user_modal_input'>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id='last_name' {...register('last_name')}/>
            </div>
            <div className='user_modal_input'>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id='birthday' {...register('birthday')}/>
            </div>
            <button className='user_modal_button'>{updateInfo ? 'Update' : 'Create'}</button>
        </div>
    </form>
  )
}

export default FormUsers