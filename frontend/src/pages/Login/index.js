import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import './styles.css';
import '../../global.css'
import api from '../../services/api';


import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Login() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no Login, tente novamente mais tarde.')
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Logo" />

        <form onSubmit={handleLogin}>
          <h1>Faca seu Login</h1>

          <input
            type="text"
            placeholder="Digite o seu ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/cadastro">
            <FiLogIn size={16} color="#E02041" />
            Nao tenho Cadastro
          </Link>
        </form>

      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}