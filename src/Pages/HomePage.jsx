import { useState } from "react";
import AnnouncementBar from "../components/Annoucement/Announcement";
import CartSection from "../components/Cart/CartSection";
import Footer from "../components/Footer/Footer";
import HeaderSection from "../components/Header/Header";
import NewsLetter from "../components/Newsletter/Newsletter";
import ProductList from "../components/ProductCard/ProductList";
import { ProductsData } from "../Data/ProductsData";


export default function HomePage() {




  const [itemCard , setItemCard]= useState([]);

  function handleAddToCart(product){
    setItemCard([...itemCard,product])
  }

  function handleRemoveFromCart(productId){
    setItemCard(itemCard.filter(product=>product.id !==productId))
  }




  return (
    <>
      <AnnouncementBar />
      <HeaderSection />
      {/* Main Content  */}
      <main class="container mx-auto px-4 md:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <ProductList
        cartItems={itemCard}
        onAdd={handleAddToCart}
        onRemove={handleRemoveFromCart}

      />
      <CartSection
        title="Your Cart"
        cartItems={itemCard}
        onRemove={handleRemoveFromCart}
      />

        </div>
      </main>
      <NewsLetter />
      <Footer />
    </>
  );
}
