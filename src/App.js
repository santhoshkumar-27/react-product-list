const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="...Search" />
      <label>
        <input type="checkbox" />
        &nbsp;&nbsp;
        Only show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable({ products }) {
  return (
    <div className="container">
      <SearchBar />
    </div>
  );
}
export default function App() {
  return <FilterableProductTable products={PRODUCTS} />
}