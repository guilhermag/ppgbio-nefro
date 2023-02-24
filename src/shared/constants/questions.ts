import { Answer, Question } from '../interfaces/form';

export const QUESTIONS: Question[] = [
  {
    order: 1,
    showButtons: true,
    question: 'Paciente possui exames prévios ?',
  },
  {
    order: 2,
    showButtons: true,
    question: 'Taxa <= 30 ml/min/1,73 m2 ?',
  },
  {
    order: 3,
    showButtons: true,
    question: 'Taxa > 30 e < 60 ml/min/1,73 m2 ?',
  },
  {
    order: 4,
    showButtons: true,
    question: 'Possui Associações ?',
  },
  {
    order: 5,
    showButtons: true,
    question: 'Possui infecção do trato urinário de repetição ?',
  },
  {
    order: 6,
    showButtons: true,
    question: 'Já foi descartado causa urológica e ginecológica ?',
  },
  {
    order: 7,
    showButtons: true,
    question: 'Nefrotilíase ?',
  },
  {
    order: 8,
    showButtons: true,
    question: 'DRC e hipertensão resistente ? ou hipertensão secundária ?',
  },
  {
    order: 9,
    showButtons: true,
    question: 'Doença renal polícistica ?',
  },
  {
    order: 10,
    showButtons: true,
    question: 'Possui hematuria ?',
  },
  {
    order: 11,
    showButtons: false,
    question: 'Calcular Taxa de Filtração Glomerular',
  },
  {
    order: 12,
    showButtons: false,
    question: 'Coletar Exames',
  },
  {
    order: 98,
    showButtons: false,
    question: 'Não há indicação de encaminhamento ao Nefrologista!',
  },
  {
    order: 99,
    showButtons: false,
    question: 'Risco alto !! Encaminhar ao Nefrologista!',
  },
];

export const ANSWERS: Answer[] = [
  { questionOrder: 1, previousQuestion: 1, caseNo: 12, caseYes: 11 },
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
    previousQuestion: 6,
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
    questionOrder: 11,
    caseNo: 2,
    caseYes: 2,
  },
  {
    questionOrder: 12,
    caseNo: 1,
    caseYes: 1,
  },
  {
    questionOrder: 98,
    caseNo: 98,
    caseYes: 98,
  },
  {
    questionOrder: 99,
    caseNo: 99,
    caseYes: 99,
  },
];
