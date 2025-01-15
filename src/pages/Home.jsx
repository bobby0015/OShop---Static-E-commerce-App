import React, { useContext } from "react";
import AutoCarousel from "../components/ui/AutoCarousel";
import ProductCard from "../components/ui/ProductCard";
import productData from "../assets/static/product";
import categoryData from "../assets/static/category";
import CategoryCard from "../components/ui/CategoryCard";
import { authContext } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const { cartItems } = useContext(authContext);

  return (
    <>
      <AutoCarousel />
      <section className="my-16">
        <h1 className="text-center my-4 text-4xl mb-8 font-semibold">
          Featured Products
        </h1>
        <div className="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {productData.map((item, index) => (
            <ProductCard
              key={item + index}
              id={item.id}
              img={item.productImage}
              name={item.productName}
              desc={item.productDescription}
              mrp={item.productMRP}
              discount={item.productDiscount}
              cat={item.productCategories}
            />
          ))}
        </div>
        <div className="my-16">
          <h1 className="text-center text-4xl mb-8 font-semibold">
            Shop by Category
          </h1>
          <div className="w-[80%] mx-auto flex-wrap flex justify-center gap-y-4 gap-x-4">
            {categoryData.map((item, index) => (
              <CategoryCard
                key={item + index}
                img={item.categoryImage}
                name={item.categoryName}
                desc={item.categoryDescription}
              />
            ))}
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Home;
