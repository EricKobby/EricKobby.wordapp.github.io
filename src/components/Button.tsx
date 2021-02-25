interface Prop extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    text: string;
    className: string;
}

export const Button = (prop: Prop) => (
    <button {...prop}>{prop.text}</button>
)