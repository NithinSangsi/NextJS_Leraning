import Image from "next/image";
export default async function ProductPage({params}: {params:Promise<{id:string}>}){
    const {id} = await params;
    const product= await fetch(`https://fakestoreapi.com/products/${id}`)
    const productJSON = await product.json();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Product Page</h1>   
            <p className="text-lg text-center max-w-2xl">
                This is the product page of our application. Here you can find detailed information about our products, including descriptions, prices, and customer reviews. We are committed to providing you with the best shopping experience possible, so feel free to explore this page and learn more about our products.
            </p>
            <h2 className="text-2xl font-bold mb-2">{productJSON.title}</h2>
                        <p>{productJSON.description}</p>
                        <p>Price: ${productJSON.price}</p>
                        <Image src={productJSON.image} alt={productJSON.title} width={200} height={200} />
        </div>
    );
}