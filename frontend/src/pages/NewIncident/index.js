import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';


export default function NewIncident() {
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleCreateIncident(event) {
    event.preventDefault();
    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('/profile');
    } catch (err) {
      console.log(err);
      alert('Falha ao criar incidente, tente novamente mais tarde.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadament para encontrar um heroi para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleCreateIncident}>
          <input type="text"
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}

          />
          <textarea
            placeholder="Descricao"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}