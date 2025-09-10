
import Content from "./components/Content"
import Message from "./components/Message"
import ExpertSection from "./components/ExpertSection"
import Testimonial from "@/components/Testimonial"

  export const metadata={
    title: "About Page",
  }

const About = () => {


  return (
    <div >
       
      <Content/>
      <Message/>
      <ExpertSection/>
      <Testimonial/>
    </div>
  )
}

export default About