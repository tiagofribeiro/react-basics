import { CardContainer } from "./style"

export default function Card(props) {
    return <CardContainer class={props.class}>{props.children}</CardContainer>
}