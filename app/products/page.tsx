/* eslint-disable @typescript-eslint/no-unused-vars */
import ClientSide from "../components/client-side";
import ServerSide from "../components/server-side";
import ProductPage from "./[id]/page";

export default function productsPage(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Explore Products</h1>   
            {/* <ClientSide /> */}
            <ServerSide />
            <p className="text-lg text-center max-w-8xl">
                This is the products page of our application. Here you can find a wide range of products that we offer, along with detailed descriptions, prices, and customer reviews. We are dedicated to providing you with the best shopping experience possible, so feel free to browse through our selection and find the perfect products for your needs.
            </p>
        </div>
    );
} 