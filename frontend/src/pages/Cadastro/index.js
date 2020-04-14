import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css'
import api from '../../services/api';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const histoty = useHistory();

  async function handleRegister(event) {
    event.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }
    console.log(data)

    try {
      const response = await api.post('ongs', data);

      alert(`ID de acesso ${response.data.id}`);

      histoty.push('/');

    } catch (err) {
      alert(`Erro tente novamente mais tarde!`)

    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo" />

          <h1>Cadastro</h1>
          <p>Faca seu cadastro</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Ja tenho Cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsApp(e.target.value)}
          />

          <div className="input-group">
            <input
              type="text"
              placeholder='Cidade'
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder='UF'
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>

  );
}