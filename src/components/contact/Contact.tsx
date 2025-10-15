import "../../styles/contact/contact.scss";
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

    const whatsappMessage = `Ola, meu nome é *${name.trim()}*, eu vim do seu site. Gostaria de olhar disponibilidade para:\n\n*Data de entrada:* ${dateIn}\n\n*Data de saida:* ${dateOut}\n\n*Mensagem:* ${message.slice(0, 100)}`

    const encodedWhatsappMessage = encodeURIComponent(whatsappMessage)
    console.log('whatsappMessage', encodedWhatsappMessage)
    
    window.open(`https://api.whatsapp.com/send?phone=5532999349064&text=${encodedWhatsappMessage}`)
  }

  return (
    <section className="contacts marging-top-responsive">

      <h1 className="heading-1">Formulário</h1>

      <form className="contacts__form">

        <div className="contacts__form__name">
          <label htmlFor='name'><strong>Nome*</strong></label>
          <input
            required
            type='text'
            name='name'
            id='name'
            placeholder='Seu nome'
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="contacts__form__dates">
          <div className="contacts__form__dates__date-in">
            <label htmlFor='date_in'><strong>Data de Entrada*</strong></label>
            <DatePicker
              required
              name='date_in'
              id='date_in'
              className="myDatePicker"
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

          <div className="contacts__form__dates__date-out">
            <label htmlFor='date_out'><strong>Data de Saida*</strong></label>
            <DatePicker
              required
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
        
        <div className="contacts__form__message">
          <label htmlFor="message"><strong>Mensagem*</strong></label>
          <p>Me conte mais sobre a sua estadia. Se é para casal ou casal com filhos...*</p>

          <textarea
            required
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
        </div>


        <button
          className="contacts__form__button"
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