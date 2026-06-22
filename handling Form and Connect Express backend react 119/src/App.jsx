import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm ();

  const onSubmit= (data) => console.log(data)

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username")} type="text" />
          <input {...register("password")} type="password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App

