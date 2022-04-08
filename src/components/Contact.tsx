import emailjs from '@emailjs/browser';
import "../styles/contacts.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { useForm, Controller } from 'react-hook-form';
import ptBR from 'date-fns/locale/pt-BR';
import { useState, useRef } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
registerLocale('ptBR', ptBR);


type data = {
  name: string,
  email: string,
  phone: string,
  date_in: Date,
  date_out: Date,
  message: string
}

export default function Contact() {

  const [statusEmail, setStatusEmail] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const { register, handleSubmit, formState: { errors }, control, reset } = useForm<data>();

  const form = useRef<any>();

  const serviceId: string = (process.env.REACT_APP_YOUR_SERVICE_ID as string);
  const templateId: string = (process.env.REACT_APP_YOUR_TEMPLATE_ID as string);  
  const userId: string = (process.env.REACT_APP_YOUR_USER_ID as string);

  function onSubmit(data: data) {
    setIsSendingEmail(true);
    
    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      userId)
      .then(() => {
        setStatusEmail("success");
        setIsSendingEmail(false);
        reset();
      })
      .catch((erro) => {
        setStatusEmail("error");
      });
  }

  return (
    <section className="contacts">

      <h1 className="global_titles">Formulário</h1>

      <form ref={form} className="contacts__form" onSubmit={handleSubmit(onSubmit)}>

        <label>Nome*</label>
        <input

          {...register('name', {
              required: "Nome obrigatório"
          })}
          type='text'
          name='name'
          placeholder='Seu nome'
        />
        <span className="contacts__form--errorMessage">{errors.name?.message}</span>
        

        <label>E-mail*</label>
        <input
          {...register('email', {
              required: "E-mail obrigatório"
          })}
          type='email'
          name='email'
          placeholder='Seu e-mail'
        />
        <span className="contacts__form--errorMessage">{errors.email?.message}</span>

        
        <label>Telefone*</label>
        <input
          {...register('phone', {
            required: "Telefone obrigatório",
            minLength: {
              value: 15,
              message: "Telefone incompleto"
            },
            onChange: (e) => {
              e.target.value = e.target.value
                .replace(/(\D)/g, "")
                .replace(/(\d{2})(\d{1})/, "($1) $2")
                .replace(/(\d{4})(\d{1})/, "$1-$2")
                .replace(/(\d{4})-(\d{1})(\d{4})/, "$1$2-$3")
                .replace(/(-\d{4})\d+?$/, "$1")
            }
          })}
          type='phone'
          name='phone'
          placeholder='Telefone'
        />
        <span className="contacts__form--errorMessage">{errors.phone?.message}</span>

        
        <div className="contacts__form--dates">
          <div className="contacts__form--dates__date_in">
            <label>Data de Entrada</label>

            <Controller
              name = 'date_in'
              control={control}
              defaultValue = {undefined}
              render={({ field }) => (
                <DatePicker
                  name = "date_in"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  placeholderText="Data de entrada"
                  locale="ptBR"
                  dateFormat="d 'de' MMMM, yyyy"
                  minDate={new Date()}
                  autoComplete="off"
                />
              )}
            />
          </div>

          <div className="contacts__form--dates__date_out">
            <label>Data de Saida</label>
            <Controller
              name = 'date_out'
              control={control}
              defaultValue = {undefined}
              render={({ field }) => (
                <DatePicker
                  name="date_out"
                  onChange={(e) => field.onChange(e)}
                  selected={field.value}
                  placeholderText="Data da saida"
                  locale="ptBR"
                  dateFormat="d 'de' MMMM, yyyy"
                  minDate={new Date()}
                  autoComplete="off"
                />
              )}
            />
          </div>
        </div>

        <label>Mensagem*</label>

        <textarea
          {...register('message', {
            required: "Mensagem obrigatório"
          })}
          name='message'
          placeholder='Sua mensagem'
          rows={10}
        >
        </textarea>
        <span className="contacts__form--errorMessage">{errors.message?.message}</span>

        
        <button className="contacts__form--button" type="submit">Enviar</button>
        <p className="contacts__form--required"><i>* Campos obrigatórios</i></p>
      </form>

      {
        statusEmail === "" && (
          <div className="contacts__placeholder">
            {
              isSendingEmail ? (
                <>
                  <p>Enviando Mensagem</p>
                  <span className="spinner"></span>
                </>
              ) : ""
            }
          </div>
       )
      }

      {
        statusEmail === "success" && (
          <div className="contacts__success">
            <AiOutlineCheckCircle size={30}/>
            <p>Mensagem Enviada</p>
          </div>
       )
      }

      {
        statusEmail === "error" && (
          <div className="contacts__error">
            <AiOutlineCloseCircle size={30}/>
            <p>Mensagem Não Enviada.</p>
          </div>
       )
      }

    </section>
  )
}