import Navbar from "../Components/Molecules/Navbar/navbar";
import Banner from "../Components/Molecules/Banner/banner";
import RecipeCardGrid from "../Components/Molecules/Card/cardgrid";
import SubscriptionForm from "../Components/Molecules/Form/form";
import Footer from "../Components/Molecules/Foter/foter";
import HeroSection from "../Components/Molecules/Herosection/section";
import Testimonials from "../Components/Molecules/Feedbacks/feedbacks";


function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <RecipeCardGrid />
        <HeroSection />
        <Testimonials />
     
        <SubscriptionForm />
        <Footer />  
   
      
    </div>
  );
}
export default Home;