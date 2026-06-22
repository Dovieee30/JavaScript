import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

//Package name: npm install react-hook-form

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm ();


  const delay =(d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve()
      }, d*1000);
    })
  }

  const onSubmit= async (data) => {
    await delay(3) //delay of 4 seconds after clicking submit button
    console.log(data)

    if(data.username !== "Debashree"){
      setError("myform", {message: "Credentials are invalid please enter correct username"})
    }
    
    if(data.username === "Debss"){
      setError("blocked", {message: "Sorry this user is blocked"})
    }

  }

  return (
    <>
    <br />
    <br />
    <br />
    {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <br />
          <input placeholder='username' {...register("username", {required: {value: true, message: "This field is required"}, minLength: {value: 5, message: "Minimum length is 5"}, maxLength: {value: 10, message: "Maximum length is 10"}})} type="text"/>
           {errors.username && <div className="red">{errors.username.message}</div>}
          <br />
          <br />
          <input placeholder='password' {...register("password", { minLength: {value: 8, message: "Minimum length of password is 8"}} )} type="password"/>
          {errors.password && <div className="red">{errors.password.message}</div>}
         <br />
         <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
          {errors.blocked && <div className="red">{errors.blocked.message}</div>}
          
        </form>
      </div>
    </>
  )
}

export default App

