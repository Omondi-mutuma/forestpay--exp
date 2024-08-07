import { navLists } from '@/constants'
import Image from 'next/image'


const Navbar = () => {
  return (
    <header className='flex py-5 w-full justify-center items-center sm:px-10 px-5'>
        <nav className='flex w-full screen-max-width'>
            <Image 
                src="/logo.png"
                alt='logo'
                width={24}
                height={24}
            />
            <div className='flex flex-1 justify-center '>
                { navLists.map( (nav) => (
                    <div key={nav} className='px-5 text-sm text-gray-300 hover:text-white transition-all'>
                        {nav}
                    </div>
                )) }
            </div>
        </nav>
    </header>
  )
}

export default Navbar