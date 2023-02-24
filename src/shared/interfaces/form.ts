export interface FormComponent {
  component: JSX.Element;
  showButtons: boolean;
  order: number;
}

export interface FormHook {
  currentQuestion: number;
  currentComponent: FormComponent;
  changeQuestion: (questionOrder: number) => void;
}

export interface Question {
  order: number;
  showButtons: boolean;
  question: string;
}

export interface Answer {
  questionOrder: number;
  previousQuestion?: number;
  caseYes: number;
  caseNo: number;
}
