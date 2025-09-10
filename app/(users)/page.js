import HeroSection from "../../components/HeroSection"
import ServerComp from "./serverComp/page"
import Category from "../../components/Category"
import VideoSection from "@/components/VideoSection"
import Experts from "@/components/Experts"
import NewsLetter from "@/components/NewsLetter"
import Blog from "@/components/Blog"
import Testimonial from "@/components/Testimonial"

const Home=()=>{
  return (

    <div >
     <HeroSection/>
    <Category/>
    <VideoSection/>
    <Experts/>
    <NewsLetter/>
    <Blog/>
    <Testimonial/>
    
    </div>
     )
}

export default Home