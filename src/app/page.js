import { Aside } from "@/components/aside/aside"
import { Navbar } from "@/components/nav/navbar"
import { Portfolio } from "@/components/portfolio/portfolio"
import { Contact } from "@/components/contact/contact"
import { Welcome } from "@/components/welcome/welcome"
import { Footer } from "@/components/footer/footer"
// import { TestBar } from "@/components/testbar/testbar"

export default function Home() {
  
  return (
    <div className='h-full bg-zinc-700 container-2xl flex justify-between '>
        <Aside/>
       <div className='pl-20 w-full '>
         <Navbar/>
         <main className='w-full'>
           <Welcome/>
           <Portfolio/>
           <Contact/>
         </main>
         <Footer/>
       </div>
     </div>
  )
}
