import { useState } from 'react';
import FormQuestion from '../components/FormQuestion';
import { FormComponent, FormHook } from '../shared/interfaces/form';

export function useForm(steps: FormComponent[]): FormHook {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  function changeQuestion(questionOrder: number) {
    setCurrentQuestion(questionOrder);
  }

  function getQuestionByOrder(order: number): FormComponent {
    const question = steps.find((component) => component.order === order);
    const questionNotFound: FormComponent = {
      component: <FormQuestion question={'Pergunta não encontrada!'} />,
      order: 0,
    };
    return question ? question : questionNotFound;
  }

  return {
    currentQuestion,
    currentComponent: getQuestionByOrder(currentQuestion),
    changeQuestion,
  };
}
