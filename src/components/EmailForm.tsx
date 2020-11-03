import React from 'react'
import { useForm } from 'react-hook-form'
import '../styles/components/emailForm.css'

type Inputs = {
  email: string,
  subject: string,
};

function EmailForm(){
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data:Inputs)  => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div className="email-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          E-mail
          <input name="email" ref={register({required: true})} />
          {errors.email && <span>E-mail é um campo obrigatório!</span>}
        </label>

        <label>
          Assunto
          <input name="subject" ref={register({required:true})} />
          {errors.email && <span>Assunto é um campo obrigatório!</span>}
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default EmailForm