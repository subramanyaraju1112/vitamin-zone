import "../styles/styles.css";
import Filters from "../filters/filters";
import SingleProduct from "../single-product/singleProduct";
import { CartState } from "../../context/context";

const Home = () => {
  const {
    productState: { products, clear, byBrand, byCategory, searchQuery },
  } = CartState();

  console.log("products", products);

  const finalProducts = () => {
    let sortedProducts = products;
    if (byBrand) {
      sortedProducts = sortedProducts.filter((prod) => prod.brand);
    }

    if (byCategory) {
      sortedProducts = sortedProducts.filter((prod) => prod.category);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    if (clear) {
      return products;
    }
    return sortedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {finalProducts().map((products) => {
          return <SingleProduct key={products.id} products={products} />;
        })}
      </div>
    </div>
  );
};

export default Home;
