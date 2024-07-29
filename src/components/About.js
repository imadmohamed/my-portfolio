import AboutImg from '../assets/about.png'

export default function About () {
    return <section className='flex flex-col md:flex-row bg-primary px-5 ' id="about">
        <div className=' md:w-1/2 '>
            <img className="object-cover py-5 "  src={AboutImg}/>
            
        </div>

        <div className='md:w-1/2 flex justify-center'>

            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl text-white border-b-4 border-[#2b2d77] mb-5 w-[170px] font-bold '>About me</h1>
                 <p className='pb-5'>Hi, my name is Imad. I'm a frontend developer specializing in React.js, JavaScript, Node.js, MongoDB, CSS3, and HTML5.  </p>
                 <p>I build numerous websites, leveraging these technologies to create dynamic and responsive user interfaces, ensuring seamless integration and functionality across various platforms and devices. </p>
            </div>
        
        </div>
        
    </section>
    
}