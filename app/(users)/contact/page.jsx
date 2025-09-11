import ContactForm from "./components/ContactForm"
import Map from "./components/Map"


  export const metadata={
    title: "Contact Us",
  }
const Contact = () => {
  return (
    <div className="">
        <Map/>
        <ContactForm/>
    </div>
  )
}

export default Contact