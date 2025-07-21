import { useState } from "react";
import AnnouncementBar from "../components/Annoucement/Announcement";
import CartSection from "../components/Cart/CartSection";
import Footer from "../components/Footer/Footer";
import HeaderSection from "../components/Header/Header";
import NewsLetter from "../components/Newsletter/Newsletter";
import ProductList from "../components/ProductCard/ProductList";
import { ProductsData } from "../Data/ProductsData";

export default function HomePage() {

  // const [cartItems, setCartItems] = useState([]);

  // const handleAddToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };

  // const handleRemoveFromCart = (productId) => {
  //   setCartItems(cartItems.filter(item => item.id !== productId));
  // };

  const [productItem , setProductItem] =useState([]);

  function handleAddToProduct(product){
    setProductItem([...productItem, product])
  }
  function handleRemoveFromCart(productId){
    setProductItem(productItem.filter(product => product.id !== productId))
  }

  return (
    <>
      <AnnouncementBar />
      <HeaderSection />
      {/* Main Content  */}
      <main class="container mx-auto px-4 md:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <ProductList
        cartItems={productItem}
        onAdd={handleAddToProduct}
        onRemove={handleRemoveFromCart}
      />
      <CartSection
        title="Your Cart"
        cartItems={productItem}
        onRemove={handleRemoveFromCart}
      />

        </div>
      </main>
      <NewsLetter />
      <Footer />
    </>
  );
}
