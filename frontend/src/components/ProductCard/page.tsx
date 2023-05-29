import { Product } from "@/interfaces";
import { Container, Price, Title } from "./styles";
import Image from "next/image";
import AddToCartBtn from "../AddToCartBtn/page";

interface Props {
    product: Product
}

export default function ProductCard(props: Props) {
    return (
        <Container>
            <Image
                src={"https://fastly.picsum.photos/id/41/400/300.jpg?hmac=pFL0jIQpf3Ri-60M7k0fzEa0D3wLQFyiLfmZRmMrvok"}
                alt={props.product.title}
                width={400}
                height={300}
            />

            <Title>{props.product.title}</Title>
            <Price>R${`${props.product.price}`.replace('.', ',')}</Price>

            <AddToCartBtn product={props.product} />

        </Container>
    )
}