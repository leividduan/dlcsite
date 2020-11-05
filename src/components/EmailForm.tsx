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

        <label>Nome</label>
        <input type="text" id="name" name="name" ref={register({required:true})} placeholder="Olá, como é o seu nome?"/>
        {errors.name && <span>Nome é um campo obrigatório.</span>}

        <label htmlFor="title">Título</label>
        <input type="text" id="title" name="title" ref={register({required:true})} placeholder="Digite um título"/>
        {errors.title && <span>Título é um campo obrigatório.</span>}

        <label htmlFor="text">Texto</label>
        <input type="text" id="text" name="text" ref={register({required:true})} placeholder="O que você deseja?"/>
        {errors.text && <span>Texto é um campo obrigatório.</span>}

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default EmailForm