import Content from "../service/components/Content"
import FAQ from "./components/FAQ"

 export const metadata={
    title: "Service Page",
    description :"This is my about page",
    keywords:["nextjs","reactjs"]
  }

const Service = () => {
  return (
    <div>
        <Content/> 
        <FAQ/>
    </div>
  )
}

export default Service