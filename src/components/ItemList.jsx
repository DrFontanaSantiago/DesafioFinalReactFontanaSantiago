import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <div
      className="d-flex mt-5"
      style={{ flexWrap: "wrap", justifyContent: "space-between" }}
    >
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};
