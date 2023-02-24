import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import FormQuestion from '../../components/FormQuestion';
import { useForm } from '../../hooks/useForm';
import { ANSWERS, QUESTIONS } from '../../shared/constants/questions';
import { FormComponent } from '../../shared/interfaces/form';
import './style.css';

function Questions() {
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
        <form>
          <div className='inputs-container'>{currentComponent.component}</div>

          {currentComponent.showButtons && (
            <div className='form-inputs'>
              <div className='input-option'>
                <input
                  type='radio'
                  name='answer'
                  value='yes'
                  id='yes'
                  onChange={(answerQuestion) =>
                    setAnswer(answerQuestion.target.value)
                  }
                />
                <label htmlFor='yesAnswer'>Sim</label>
              </div>

              <div className='input-option'>
                <input
                  type='radio'
                  name='answer'
                  value='no'
                  id='no'
                  onChange={(answerQuestion) =>
                    setAnswer(answerQuestion.target.value)
                  }
                />
                <label htmlFor='noAnswer'>Não</label>
              </div>
            </div>
          )}

          <div className='actions'>
            {checkInitialQuestion() && (
              <button
                type='button'
                onClick={() => {
                  selectPreviousQuestion();
                }}
              >
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {checkFinalQuestion() && (
              <button
                type='button'
                onClick={() => {
                  selectNextQuestion();
                }}
              >
                <span>Avançar</span>
                <GrFormNext />
              </button>
            )}
          </div>
        </form>
      </div>
      <Link to={'/'}>Voltar para a Home</Link>
    </div>
  );

  function generateComponentQuestions(): FormComponent[] {
    return QUESTIONS.map((question) => ({
      component: <FormQuestion question={question.question} />,
      showButtons: question.showButtons,
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

  function checkFinalQuestion(): boolean {
    return currentComponent.order < 13;
  }

  function checkInitialQuestion(): boolean {
    return currentComponent.order > 1;
  }
}

export default Questions;
