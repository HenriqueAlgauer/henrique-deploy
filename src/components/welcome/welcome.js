import { Slide } from "../slider/slider"

function Welcome(){
    return(
        <div className='grid grid-cols-3 '>
            <div className='border-r box-border py-8 border-sky-300 flex items-center col-span-2 pl-16'>
              <h3 className='text-sky-300 text-7xl font-bold'>
                Dev <br />
                Front-end <br />
                <span className='text-zinc-100 font-thin'>Junior</span>
              </h3>
            </div>
            <Slide/>
          </div>
    )
}

export {Welcome}