import HeroImg from '../assets/hero.png';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutline, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero(){

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
        <div className='md:w-1/2 flex-col' >
         <h1 className=' text-white text-6xl font-hero-font'>Hi <br/> I'm <span className='text-black'>imad</span> adhambawa
         <p className='text-2xl'>
            I'm a Front-end developer
         </p>
         </h1>
         <div className='flex py-5'>
            <a href='https://www.instagram.com/imad.abm/' className='pr-1 hover:text-white'><AiOutlineInstagram size={35} /></a>
            <a href='https://web.facebook.com/imad.abm.54' className='pr-1 hover:text-white'><AiOutlineFacebook size={35}/></a>
            <a href='https://www.linkedin.com/in/abmohamedimad/'className='hover:text-white'><AiOutlineLinkedin size={35}/></a>
            <a href='https://github.com/imadmohamed'className='hover:text-white'><AiOutlineGithub size={35}/></a>

         </div>
         </div>
         <img className='md:w-1/3 'src={HeroImg} />
    </section>

}