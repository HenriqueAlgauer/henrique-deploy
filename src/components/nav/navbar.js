import Link from "next/link"

const Navbar = () => {
    return (
        <nav className='w-full h-20  bg-zinc-700 flex justify-between items-center border-b border-sky-300'>
            <div className='cursor-pointer flex items-center gap-4 pl-16'>
                <h2 className='text-xl text-sky-300 font-bold'><Link href='/'>Henrique Algauer</Link></h2>
            </div>
            <Link className=' text-zinc-100 px-12 h-full bg-sky-300 flex items-center' href='/contato'>CONTATO</Link>
        </nav>
    )
}

export {Navbar}