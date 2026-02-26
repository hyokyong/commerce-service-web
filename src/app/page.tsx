import { ProductCard, type Product } from "@/components/commerce/ProductCard/ProductCard";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "sofa",
    name: "Loveseat Sofa",
    price: 400,
    salePrice: 199,
    imageUrl:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rating: 5,
  },
  {
    id: "table-lamp",
    name: "Table Lamp",
    price: 24.99,
    imageUrl:
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rating: 4.8,
  },
  {
    id: "beige-lamp",
    name: "Beige Table Lamp",
    price: 29.99,
    imageUrl:
      "https://images.pexels.com/photos/1125138/pexels-photo-1125138.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rating: 4.7,
  },
  {
    id: "basket",
    name: "Bamboo basket",
    price: 24.99,
    imageUrl:
      "https://images.pexels.com/photos/1118846/pexels-photo-1118846.jpeg?auto=compress&cs=tinysrgb&w=1200",
    rating: 4.6,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col px-4 pb-16 pt-8">
        <header className="mb-10 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
              Cursor Commerce
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Explore our curated selection of modern furniture and decor.
            </p>
          </div>
          <div className="mt-4 flex w-full max-w-md items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm sm:mt-0">
            <span className="text-sm text-slate-400">Search for products…</span>
          </div>
        </header>

        <section>
          <h2 className="mb-6 text-lg font-semibold text-slate-900">All</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MOCK_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
