import { Answer, Question } from '../interfaces/form';

export const QUESTIONS: Question[] = [
  {
    order: 1,
    question: 'Paciente possui exames prévios ?',
  },
  {
    order: 2,
    question: 'Taxa <= 30 ml/min/1,73 m2 ?',
  },
  {
    order: 3,
    question: 'Taxa > 30 e < 60 ml/min/1,73 m2 ?',
  },
  {
    order: 4,
    question: 'Possui Associações ?',
  },
  {
    order: 5,
    question: 'Possui infecção do trato urinário de repetição ?',
  },
  {
    order: 6,
    question: 'Já foi descartado causa urológica e ginecológica ?',
  },
  {
    order: 7,
    question: 'Nefrotilíase ?',
  },
  {
    order: 8,
    question: 'DRC e hipertensão resistente ? ou hipertensão secundária ?',
  },
  {
    order: 9,
    question: 'Doença renal polícistica ?',
  },
  {
    order: 10,
    question: 'Possui hematuria ?',
  },
  {
    order: 98,
    question: 'Não há indicação de encaminhamento ao Nefrologista!',
  },
  {
    order: 99,
    question: 'Risco alto !! Encaminhar ao Nefrologista!',
  },
];

export const ANSWERS: Answer[] = [
  { questionOrder: 1, previousQuestion: 1, caseNo: 1, caseYes: 2 },
  {
    questionOrder: 2,
    previousQuestion: 1,
    caseNo: 3,
    caseYes: 99,
  },
  {
    questionOrder: 3,
    previousQuestion: 2,
    caseNo: 98,
    caseYes: 4,
  },
  {
    questionOrder: 4,
    previousQuestion: 3,
    caseNo: 5,
    caseYes: 99,
  },
  {
    questionOrder: 5,
    previousQuestion: 4,
    caseNo: 7,
    caseYes: 6,
  },
  {
    questionOrder: 6,
    previousQuestion: 5,
    caseNo: 7,
    caseYes: 99,
  },
  {
    questionOrder: 7,
    caseNo: 8,
    caseYes: 99,
  },
  {
    questionOrder: 8,
    previousQuestion: 7,
    caseNo: 9,
    caseYes: 99,
  },
  {
    questionOrder: 9,
    previousQuestion: 8,
    caseNo: 10,
    caseYes: 99,
  },
  {
    questionOrder: 10,
    previousQuestion: 9,
    caseNo: 98,
    caseYes: 99,
  },
  {
    questionOrder: 99,
    caseNo: 99,
    caseYes: 99,
  },
  {
    questionOrder: 98,
    caseNo: 98,
    caseYes: 98,
  },
];
