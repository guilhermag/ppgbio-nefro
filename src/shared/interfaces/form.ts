export interface FormComponent {
  component: JSX.Element;
  order: number;
}

export interface FormHook {
  currentQuestion: number;
  currentComponent: FormComponent;
  changeQuestion: (questionOrder: number) => void;
}

export interface Question {
  order: number;
  question: string;
}

export interface Answer {
  questionOrder: number;
  previousQuestion?: number;
  caseYes: number;
  caseNo: number;
}
