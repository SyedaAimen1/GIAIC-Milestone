
import Header from "./components/Header";
import Hero from "./components/Hero";
import Headertop from "./components/Headertop";
import Logo from "./components/logo";
import FeaturesProduct from "./components/FeaturesProduct";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Footer from "./components/Footer";


export default function HomePage() {
  return (
   <main>
<Headertop/>
<Header/>
<Hero/>
<Logo/>
<FeaturesProduct/>
<Categories/>
<Products/>
<Footer/> 
   </main>
  );
}
