/* eslint-disable react/prop-types */
export default function ProductCard({ product }) {
  return (
    <div className="border-2 border-yellow-300 p-4" key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
}
