/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
export default async function ServerSide(){
    const data =await fetch("https://fakestoreapi.com/products")
    const products = await data.json()
    console.log('Server side rendering:', products)
    return (
        <div style={{display: 'flex',columnGap:'10px', flexWrap : 'wrap'}}>
            {/* <h1 className="text-4xl font-bold mb-4">Welcome to the Server-Side Page</h1>    */}
            {/* <p className="text-lg text-center max-w-2xl">
                This is the server-side page of our application. Here you can find information about how we handle server-side rendering, including the benefits and challenges associated with it. We are committed to providing you with a seamless user experience, so feel free to explore this page and learn more about our server -side rendering approach.
            </p> */}
            {
                products.map((product: any) => (
                    <div key={product.id}
                    style={{border:'1px white solid',borderRadius:'10px', width: '300px' , padding:'10px' }}>
                        <Link href={`/products/${product.id}`}> 
                        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                        <p>{product.description}</p>
                        <p style = {{background:'white', color :'black'}}>Price: ${product.price}</p>
                        </Link>
                    </div>
                ))   
            }
        </div>
    );
    
}