
type QuestionWrapper = {
    id: string;
    question: {
        question: string;
        type: "radio" | "checkbox";
        answers: {
            id: string;
            answer: string;
            value: string;
        }[];
        explanation?: string;
    };
}


export function Question({ question }: QuestionWrapper) {
    return (
        <div className="text-center flex flex-col">
            <h4 className="font-medium font-dynapuff">
                {question.question}
            </h4>
            <ul className="list-disc pl-5 mt-2">
                {question.answers.map((answer) => (
                    <li key={answer.id}>
                        {answer.answer} - {answer.value} shells
                    </li>
                ))}
            </ul>
        </div>
    );
}