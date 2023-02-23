import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import './App.css';
import FormQuestion from './components/FormQuestion';
import { useForm } from './hooks/useForm';
import { ANSWERS, QUESTIONS } from './shared/constants/questions';
import { FormComponent } from './shared/interfaces/form';

function App() {
  const formComponents: FormComponent[] = generateComponentQuestions();
  const [answer, setAnswer] = useState('');
  const [previousQuestion, setPreviousQuestion] = useState(1);

  const { currentQuestion, currentComponent, changeQuestion } =
    useForm(formComponents);

  return (
    <div className='app'>
      <div className='header'>
        <h2>Inicie a avaliação do paciente</h2>
      </div>
      <div className='form-container'>
        <p>etapas</p>
        <form>
          <div className='inputs-container'>{currentComponent.component}</div>
          <div className='form-check'>
            <label>
              <input
                type='radio'
                name='answer'
                value='yes'
                className='form-check-input'
                onChange={(answerQuestion) =>
                  setAnswer(answerQuestion.target.value)
                }
              />
              Sim
            </label>
          </div>

          <div className='form-check'>
            <input
              type='radio'
              name='answer'
              value='no'
              className='form-check-input'
              onChange={(answerQuestion) =>
                setAnswer(answerQuestion.target.value)
              }
            />
            Não
          </div>
          <div className='actions'>
            <button
              type='button'
              onClick={() => {
                selectPreviousQuestion();
              }}
            >
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button
              type='button'
              onClick={() => {
                selectNextQuestion();
              }}
            >
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  function generateComponentQuestions(): FormComponent[] {
    return QUESTIONS.map((question) => ({
      component: <FormQuestion question={question.question} />,
      order: question.order,
    }));
  }

  function selectNextQuestion() {
    const question =
      ANSWERS.find((answer) => answer.questionOrder === currentQuestion) ||
      ANSWERS[0];
    setPreviousQuestion(currentQuestion);

    switch (answer) {
      case 'yes':
        changeQuestion(question.caseYes);
        break;
      case 'no':
        changeQuestion(question.caseNo);
        break;
      default:
        console.log('error: not found');
    }
  }

  function selectPreviousQuestion() {
    const question =
      ANSWERS.find((answer) => answer.questionOrder === currentQuestion) ||
      ANSWERS[0];
    changeQuestion(question.previousQuestion || previousQuestion);
  }
}

export default App;
