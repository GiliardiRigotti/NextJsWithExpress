import React from 'react'
import { ButtonDecrease, ButtonIncrease, Container } from './styles'

interface Props {
    onIncrease: () => void
    onDecrease: () => void
    qty: number
}
export default function QtyBtn(props: Props) {
    return (
        <Container>
            <ButtonDecrease onClick={props.onDecrease}>
                {
                    props.qty === 1 ? "x" : "-"
                }
            </ButtonDecrease>
            <p style={{ fontSize: 20, fontWeight: "bold" }}>{props.qty}</p>
            <ButtonIncrease onClick={props.onIncrease}>
                +
            </ButtonIncrease>
        </Container>
    )
}
