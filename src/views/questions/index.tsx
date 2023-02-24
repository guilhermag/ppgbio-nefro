import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import FormQuestion from '../../components/FormQuestion';
import { useForm } from '../../hooks/useForm';
import { ANSWERS, QUESTIONS } from '../../shared/constants/questions';
import { Answer, FormComponent } from '../../shared/interfaces/form';
import './style.css';

function Questions() {
  const formComponents: FormComponent[] = generateComponentQuestions();
  const [answer, setAnswer] = useState('');
  const [previousQuestion, setPreviousQuestion] = useState(1);
  const [checkYes, setCheckYes] = useState(false);
  const [checkNo, setCheckNo] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const { currentQuestion, currentComponent, changeQuestion } =
    useForm(formComponents);

  return (
    <div className='center-content gap-2rem'>
      <div className='form-container'>
        <form>
          <div className='inputs-container'>{currentComponent.component}</div>

          {currentComponent.showButtons && (
            <div className='form-inputs center-content'>
              {/* {showErrorMessage && <div>teste</div>} */}

              <div className='input-option'>
                <input
                  type='radio'
                  name='answer'
                  value='yes'
                  id='yes'
                  required
                  checked={checkYes}
                  onChange={(answerQuestion) => {
                    setCheckNo(false);
                    setCheckYes(true);
                    setAnswer(answerQuestion.target.value);
                  }}
                />
                <label htmlFor='yesAnswer'>Sim</label>
              </div>

              <div className='input-option'>
                <input
                  type='radio'
                  name='answer'
                  value='no'
                  id='no'
                  checked={checkNo}
                  required
                  onChange={(answerQuestion) => {
                    setCheckNo(true);
                    setCheckYes(false);
                    setAnswer(answerQuestion.target.value);
                  }}
                />
                <label htmlFor='noAnswer'>Não</label>
              </div>
            </div>
          )}

          <div className='actions center-content'>
            {checkInitialQuestion() && (
              <button
                type='button'
                onClick={(event) => {
                  selectPreviousQuestion();
                }}
                className='center-content row'
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
                className='center-content row'
              >
                <span>Avançar</span>
                <GrFormNext />
              </button>
            )}
          </div>
        </form>
      </div>
      <Link to={'/'}>
        <div className='app-button center-content'>Voltar para a Home</div>
      </Link>
    </div>
  );

  function generateComponentQuestions(): FormComponent[] {
    return QUESTIONS.map((question) => ({
      component: <FormQuestion question={question} />,
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
      case '':
        if (question.questionOrder > 10) {
          changeQuestion(question.caseYes);
        }
        break;
      default:
        console.log('error: not found');
    }
    checkShowErrorMessage();
    setCheckNo(false);
    setCheckYes(false);
    setAnswer('');
  }

  function selectPreviousQuestion() {
    const question =
      ANSWERS.find((answer) => answer.questionOrder === currentQuestion) ||
      ANSWERS[0];
    changeQuestion(question.previousQuestion || previousQuestion);
    setCheckNo(false);
    setCheckYes(false);
    setAnswer('');
  }

  function checkFinalQuestion(): boolean {
    return currentComponent.order < 13;
  }

  function checkInitialQuestion(): boolean {
    return currentComponent.order > 1;
  }

  function checkShowErrorMessage() {
    if (!checkNo && !checkYes) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
    }
  }
}

export default Questions;
