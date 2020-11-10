import React from 'react'
import { useForm } from 'react-hook-form'
import '../styles/components/emailForm.css'

type Inputs = {
  name: string,
  title: string,
  text: string,
};

function EmailForm(){
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data:Inputs)  => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div className="email-form">
      <form onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="name">Nome</label>
        {errors.name && <span className="error">Campo obrigatório.</span>}
        <input type="text" id="name" name="name" ref={register({required:true})} placeholder="Olá, qual é o seu nome?"/>

        <label htmlFor="title">Título</label>
        {errors.title && <span className="error">Campo obrigatório.</span>}
        <input type="text" id="title" name="title" ref={register({required:true})} placeholder="Escreve um título aí! :)"/>

        <label htmlFor="text">Texto</label>
        {errors.text && <span className="error">Campo obrigatório.</span>}
        <textarea id="text" name="text" ref={register({required:true})} placeholder="Me conta uma boa novidade."/>
        

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default EmailForm