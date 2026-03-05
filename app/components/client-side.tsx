'use client'
import {useState, useEffect} from 'react'
// import { json } from 'stream/consumers';
export default function ClientSide(){
    const[products,setProducts] = useState([]);
    useEffect(() => {
        console.log("Client-side rendering is working!");
        async function fetchData(){
            const data =await fetch("https://fakestoreapi.com/products")
            const products = await data.json()
            setProducts(products)
            console.log('Client side rendering:', products)
        }
        fetchData()
    },[])
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Client-Side Page</h1>   
            <p className="text-lg text-center max-w-2xl">
                This is the client-side page of our application. Here you can find information about how we handle client-side rendering, including the benefits and challenges associated with it. We are committed to providing you with a seamless user experience, so feel free to explore this page and learn more about our client-side rendering approach.
            </p>
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                products.map((product: any) => (
                    <div key={product.id} className="border p-4 rounded mb-4 w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))   
            }
        </div>
    );
    
}