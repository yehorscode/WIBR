import questionsData from "../data/questions.json";

export type Question = (typeof questionsData)[number];
export type Answer = Question["question"]["answers"][number];

export function getAllQuestions(): Question[] {
    return questionsData;
}

export function getQuestionById(id: string): Question | undefined {
    return questionsData.find((q) => q.id === id);
}

export function getAnswersForQuestion(id: string): Answer[] | undefined {
    const question = getQuestionById(id);
    return question?.question.answers;
}

export function isAnswerCorrect(questionId: string, answerId: string): boolean {
    const answers = getAnswersForQuestion(questionId);
    if (!answers) return false;
    const answer = answers.find((a) => a.id === answerId);
    return !!answer && Number(answer.value) > 0;
}

export function getExplanationForQuestion(id: string): string | undefined {
    const question = getQuestionById(id);
    return question?.question.explanation;
}
