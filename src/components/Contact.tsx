import "../styles/contacts.scss";
import { useState } from "react";

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
registerLocale('ptBR', ptBR);

let dateTomorrow = new Date()
dateTomorrow.setDate(dateTomorrow.getDate() + 1)

export default function Contact() {

  const [name, setName] = useState("")
  const [dateIn, setDateIn] = useState("")
  const [dateOut, setDateOut] = useState("")
  const [message, setMessage] = useState("")

  const [dateInPicker, setDateInPicker] = useState<Date>()
  const [dateOutPicker, setDateOutPicker] = useState<Date>()

  function handleClick() {
    const whatsappMessage = `Ola, meu nome é *${name}*, eu vim do seu site.

      Gostaria de olhar disponibilidade para:

      *Data de entrada:* ${dateIn}
      *Data de saida:* ${dateOut}

      *Mensagem:* ${message.slice(0, 100)}`;

    const encodedWhatsappMessage = encodeURIComponent(whatsappMessage)
    console.log('whatsappMessage', encodedWhatsappMessage)
    
    window.open(`https://api.whatsapp.com/send?phone=5532999349064&text=${encodedWhatsappMessage}`)
  }

  return (
    <section className="contacts">

      <h1 className="global_titles">Formulário</h1>

      <form className="contacts__form">

        <label htmlFor='name'><strong>Nome*</strong></label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Seu nome'
          onChange={(event) => setName(event.target.value)}
        />
        <span className="contacts__form--errorMessage"></span>

        <div className="contacts__form--dates">
          <div className="contacts__form--dates__date_in">
            <label htmlFor='date_in'><strong>Data de Entrada*</strong></label>
            <DatePicker
              name='date_in'
              id='date_in'
              onChange={(e) => {
                if(e == null) {
                  setDateIn("Não Definido - Error")
                  return
                }
                const date = new Date(e.getTime())
                setDateInPicker(date)
                const formattedDate = format(date, "d 'de' MMMM, yyyy '-' EEEE", { locale: ptBR });
                setDateIn(formattedDate)
              }}
              onFocus={e => e.target.blur()} // To avoid keyboard onFocus.
              selected={dateInPicker}
              placeholderText="Data de entrada"
              locale="ptBR"
              dateFormat="d 'de' MMMM, yyyy '-' EEEE"
              minDate={new Date()}
              autoComplete="off"
            />
          </div>

          <div className="contacts__form--dates__date_out">
            <label htmlFor='date_out'><strong>Data de Saida*</strong></label>
            <DatePicker
              name="date_out"
              id="date_out"
              onChange={(e) => {
                if(e == null) {
                  setDateOut("Não Definido - Error")
                  return
                }
                const date = new Date(e.getTime())
                setDateOutPicker(date)
                const formattedDate = format(date, "d 'de' MMMM, yyyy '-' EEEE", { locale: ptBR });
                setDateOut(formattedDate)
              }}
              onFocus={e => e.target.blur()} // To avoid keyboard onFocus.
              selected={dateOutPicker}
              placeholderText="Data da saida"
              locale="ptBR"
              dateFormat="d 'de' MMMM, yyyy '-' EEEE"
              minDate={dateTomorrow}
              autoComplete="off"
            />
          </div>
        </div>
        
        <label htmlFor="message"><strong>Mensagem*</strong></label>
        <p>Me conte mais sobre a sua estadia. Se é para casal ou casal com filhos...*</p>

        <textarea
          name='message'
          id='message'
          placeholder='Sua mensagem'
          rows={4}
          maxLength={100}
          onChange={(e) => setMessage(e.target.value)}
        >
        </textarea>
        <div className="the-count">
          <span id="current">{message.length}</span>
          <span id="maximum">/ 100</span>
        </div>
        <span className="contacts__form--errorMessage"></span>


        <button
          className="contacts__form--button"
          type="button"
          onClick={handleClick}
          disabled={name === '' || dateIn === '' || dateOut === '' || message === ''}
        >
          Enviar
        </button>
        <p className="contacts__form--required"><i>* Campos obrigatórios</i></p>

      </form>
    </section>
  )
}