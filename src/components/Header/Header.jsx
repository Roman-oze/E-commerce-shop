import IconGroup from "./IconsGroup";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

export default function HeaderSection() {
  return (
    //   Header/Navigation
   <header class="border-b border-gray-200 py-4 px-4 md:px-8">
    <div class="container mx-auto flex items-center justify-between">
      <a href="#" class="text-2xl font-bold">LWS.SHOP</a>
      <Navigation />
      <div className="flex items-center space-x-4">
        <IconGroup />
        <SearchBar />
      </div>    
    </div>
    </header>

  );
}
