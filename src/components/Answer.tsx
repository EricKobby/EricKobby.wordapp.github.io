interface Prop {
    answer: string
}

export const Answer: React.FC<Prop> = ({ answer }) => (<li className="list-group-item list-group-item-action" >{answer}</li>)