'use client'
import { useEffect, useState } from 'react';
import { Container } from './styles'
import { Product } from '@/interfaces';
import ProductCard from '@/components/ProductCard/page';
import { api, urls } from '@/api/api';


export default function Home() {
    const [productsData, setProductsData] = useState<Product[]>()
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await api.get(urls.products)
                setProductsData(data)
                console.log(data)
            } catch (error) {
                alert("Erro ao carregar os produtos")
            }
        }
        getData();
    }, [])

    if (productsData?.length == 0) {
        return (
            <Container>
                ...Carregando
            </Container>
        )
    }
    return (
        <Container>
            {
                productsData?.map(product => <ProductCard key={product.id} product={product} />)
            }
        </Container>
    )
}
