import React from 'react';
import { useForm } from "react-hook-form";
import './styles/CheckoutForm.css';

export default function CheckoutForm({onSubmit}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <>
    <h1>Complete sus datos para terminar la compra!</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-outline mb-4">
         <label>Nombre completo</label>
         <input className="form-control" {...register("name", { required: true, maxLength: 30, pattern: /^[A-Za-z\s]+$/i })} />
         {errors?.name?.type === "required" && <b>El nombre completo es requerido!</b>}
         {errors?.name?.type === "maxLength" && (
          <b>Nombre completo no puede superar los 30 caracteres.</b>
         )}
         {errors?.name?.type === "pattern" && (
          <b>Solamente acepta caracteres alfabeticos.</b>
         )}
      </div>
       
      <div className="form-outline mb-4">
      <label>Numero de teléfono</label>
      <input className="form-control" {...register("cel", { required: true, maxLength: 20, pattern: /^[0-9]+$/i})} />
      {errors?.cel?.type === "required" && <b>El número de teléfono es requerido!</b>}
      {errors?.cel?.type === "pattern" && (
        <b>Poner un número de teléfono válido como este 01151501213</b>
      )}
      </div>
       
      <div className="form-outline mb-4">
      <label>Correo Electrónico</label>
      <input className="form-control" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i})} />
      {errors?.email?.type === "required" && <b>El correo electrónico es requerido!</b>}
      {errors?.email?.type === "pattern" && (
        <b>Poner un formato valido de email como este example@gmail.com  </b>
      )}
      </div>

      <button type="submit" className="btn btn-primary btn-block">Enviar orden</button>
    </form>
    </>
  )
}
