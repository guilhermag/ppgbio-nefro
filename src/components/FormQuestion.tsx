import React from 'react';

interface Props {
  question: string;
}

const FormQuestion = ({ question }: Props) => {
  return (
    <div>
      <h2>{question}</h2>
    </div>
  );
};

export default FormQuestion;
