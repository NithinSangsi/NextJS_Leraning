import Link from "next/link"
export default function Navbar(){
    return (
        <>
        <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">My Ecommerce Store</h1>
            <div className="flex space-x-4">
                <Link href="/home" className="hover:underline">Home</Link>
                <Link href="/products" className="hover:underline">Products</Link>
            </div>
        </nav>
        </>
    )
}