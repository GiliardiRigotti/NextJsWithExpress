'use client'
import { Container, LinkButton, NavBar } from "./styles";

export default function Headers() {
    return (
        <Container>
            <LinkButton href={'/'} >Home</LinkButton>
            <LinkButton href={'/pages/cart'} >Carrinho</LinkButton>
        </Container>
    )
}