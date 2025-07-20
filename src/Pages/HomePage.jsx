import AnnouncementBar from "../components/Annoucement/Announcement";
import CartSection from "../components/Cart/CartSection";
import Footer from "../components/Footer/Footer";
import HeaderSection from "../components/Header/Header";
import NewsLetter from "../components/Newsletter/Newsletter";
import ProductList from "../components/ProductCard/ProductList";

export default function HomePage() {

  
  return (
    <>
      <AnnouncementBar />
      <HeaderSection />
      {/* Main Content  */}
      <main class="container mx-auto px-4 md:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ProductList />
          <CartSection title ="YOUR CART"/>
        </div>
      </main>
      <NewsLetter />
      <Footer />
    </>
  );
}
