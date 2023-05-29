'use client'
import { Product } from "@/interfaces";
import { decrement, increment, productQtyInCartSelector } from "@/store/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { Button, LinkButton } from "./styles";
import QtyBtn from "../QtyBtn/page";

interface Props {
    product: Product
}
export default function AddToCartBtn(props: Props) {
    const qty = useAppSelector(state => productQtyInCartSelector(state, props.product.id))
    const dispatch = useAppDispatch()
    if (!qty) return (<div>
        <Button onClick={() => dispatch(increment(props.product))}>Adicionar ao carrinho</Button>
    </div>)
    return (
        <QtyBtn onIncrease={() => dispatch(increment(props.product))} onDecrease={() => dispatch(decrement(props.product))} qty={qty} />
    )
}