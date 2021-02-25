
export interface InitialState{
    questions: Array<any>;
    current: any;
    score: 0;
    actions: any;
    currentIndex: number;
}

export interface ReducerAction{
    type: string;
    payload?: any;
}


export enum WordActionCreatorType{
    GetQuestions = "getQuestions",
    SubmitAnswer =  "submitAnswer",
    GetNextQuestion = "getNextQuestion"
}

export type WithContextProp =  Partial<InitialState>