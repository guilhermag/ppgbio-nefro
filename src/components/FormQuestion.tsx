import React from 'react';
import { Question } from '../shared/interfaces/form';
import './style.css';

interface Props {
  question: Question;
}

const FormQuestion = ({ question }: Props) => {
  const checkOrder = question.order === 1;
  return (
    <div className='center-content'>
      <div className='header'>
        {checkOrder && <h2>Inicie a avaliação do paciente</h2>}
      </div>

      <h3>{question.question}</h3>
    </div>
  );
};

export default FormQuestion;
