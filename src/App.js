import { useState } from 'react';

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
function CategoryName({ category }) {
  return (
    <tr>
      <td colSpan={2} className="text-center1">
        {category}
      </td>
    </tr>
  )
}
function ProductRow({ product }) {
  const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>
  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {product.price}
      </td>
    </tr>
  )
}
function ProductsTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.map((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <CategoryName category={product.category} key={product.category} />
      )
    }
    rows.push(
      <ProductRow product={product} key={product.name} />
    )
    lastCategory = product.category;
  })

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}
function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <form>
      <input type="text" onChange={(e) => onFilterTextChange(e.target.value)} value={filterText} placeholder="...Search" />
      <label className="mt-3">
        <input type="checkbox" onChange={(e) => onInStockOnlyChange(e.target.checked)} checked={inStockOnly} />
        &nbsp;&nbsp;
        Only show products in stock
      </label>
    </form>
  )
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(true);
  return (
    <div className="container">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductsTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
export default function App() {
  return <FilterableProductTable products={PRODUCTS} />
}