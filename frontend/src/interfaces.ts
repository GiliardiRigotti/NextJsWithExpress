export interface Product {
    id: string
    title: string
    price: number
    image_url: string
}

export interface CartItem {
    product: Product
    qty: number
}