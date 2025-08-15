import { headerLogo } from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
     <nav className='flex items-center justify-between max-container    '>
        <a href='/'>
        <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden bg-orange-100 py-2.5 px-3 rounded-full'>
         {navLinks.map((item) => (
           <li key={item.label}>
             <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray  '>
               {item.label}
             </a>
           </li>
         ))}
        </ul>
        <div className='hidden max-lg:block'> 
            <img src={hamburger} alt="Menu" width={25} height={25} />
        </div>
     </nav>
    </header>
  )
}

export default Nav
