import Link from 'next/link';
export default function Ecom() {
  return (
    <div>
      <h1>Welcome to the E-commerce page!</h1>
      <p>Explore our wide range of products and enjoy seamless shopping experience.</p>
      <Link href="/products">View Products</Link>
    </div>
  );
}