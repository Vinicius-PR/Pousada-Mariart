import "../styles/contacts.scss";
import { format, parseISO } from "date-fns";

import { useForm } from 'react-hook-form';
import ptBR from 'date-fns/locale/pt-BR';

interface data {
  name: string,
  email: string,
  phone: string,
  date_in: string,
  date_out: string,
  message: string
}

export default function Contact() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date_in: "",
      date_out: "",
      message: ""
    }
  });

  function onSubmit(data: data) {
    const dateInFormated = data.date_in ?
      format(parseISO(data.date_in), "dd 'de' MMMM 'de' yyyy", {
        locale: ptBR
      }) :
      "Não informado";
    
    const dateOutFormated = data.date_out ?
      format(parseISO(data.date_out), "dd 'de' MMMM 'de' yyyy", {
        locale: ptBR
      }) :
      "Não informado";
      
    const message = `
      Nome: ${data.name},
      E-mail: ${data.email},
      Telefone: ${data.phone},
      Data de entrada: ${dateInFormated},
      Data de saida: ${dateOutFormated},
      Mensagem: ${data.message}
    `;

    console.log(message);
    
    // const message_to_send = {
    //   to: 'contato_site_pousadamariart@hotmail.com',
    //   from: 'contato_site_pousadamariart@hotmail.com',
    //   subject: 'Contato Site Pousada',
    //   text: 'and easy to do anywhere, even with Node.js',
    //   html: `
    //     <strong>Nome:</strong> ${data.name},
    //     <strong>E-mail:</strong> ${data.email},
    //     <strong>Telefone:</strong> ${data.phone},
    //     <strong>Data de entrada:</strong> ${dateInFormated},
    //     <strong>Data de saida:</strong> ${dateOutFormated},
    //     <strong>Mensagem:</strong> ${data.message}
    //   `,
    // }
  }

  return (
    <section className="contacts">
      <h1 className="global_titles">Formulário</h1>

      <form className="contacts__form" onSubmit={handleSubmit(onSubmit)}>

        <label>Nome</label>
        <input

          {...register('name', {
              required: "Nome obrigatório"
          })}
          type='text'
          name='name'
          placeholder='Seu nome'
        />
        <span>{errors.name?.message}</span>
        

        <label>E-mail</label>
        <input
          {...register('email', {
              required: "E-mail obrigatório"
          })}
          type='email'
          name='email'
          placeholder='Seu e-mail'
        />
        <span>{errors.email?.message}</span>

        
        <label>Telefone</label>
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
        <span>{errors.phone?.message}</span>
        <div className="contacts__form--dates">
          <div className="contacts__form--dates__date_in">
            <label>Data de Entrada</label>
            <input
              {...register('date_in')}
              type='date'
              name='date_in'
              lang="pt-br"
            />
          </div>

          <div className="contacts__form--dates__date_out">
            <label>Data de Saida</label>
            <input
              {...register('date_out')}
              type='date'
              name='date_out'
              lang="pt-br"
            />
          </div>
        </div>

        <label>Message</label>

        <textarea
          {...register('message', {
            required: "Mensagem obrigatório"
          })}
          name='message'
          placeholder='Sua mensagem'
          rows={10}
        >
        </textarea>
        <span>{errors.message?.message}</span>

        
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}