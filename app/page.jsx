import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Digital Marketer</span>
          <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-cyan-400">Shirish Shrestha</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I excel at crafting compelling digital strategies that drive engagement and growth, 
            with proficiency across various marketing platforms and tools. </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0"><Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-cyan-500 rounded-full flex justify-center items-center text-cyan-400 text-base hover:bg-cyan-500 hover:text-primary hover:transition-all duration-500"/></div>
            </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0"><Photo/></div>
        </div>
      </div>
      <Stats/>
      </section>
  )
}

export default Home