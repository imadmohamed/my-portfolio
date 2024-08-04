import websiteImg1 from "../assets/DoorDhis.png";
import websiteImg2 from "../assets/iMad.png";
import websiteImg3 from "../assets/ecommerce-websites.jpg";

export default function Projects(){
      return<section id="projects" className="flex flex-col py-20 px-5 justify-center  bg-secondary text-white" >
        <div className="w-full">
             
             <div className="flex flex-col px-10 py-5">
             <h1 className="text-4xl text-white border-b-4 border-[#5551E3] mb-5 w-[145px] font-bold">Projects</h1>
             <p>These are some of my best projects. I have built these with React, MERN and vanilla CSS. Check them out.</p>
             </div>
        </div>

        <div className="w-full">

        <div className="flex flex-col md:flex-row px-10 gap-5">
            <div className="relative">
                <img className="h-[200px] w-[500px]" src={websiteImg1}/>
                <div className="project-disc" >
                    <p className="text-center px-5 py-12">Full Stack Food Delivery Website In React JS, MongoDB, Express, Node JS & Stripe <br/><br/></p>

                    <div className="text-center	">
                    <a href="https://door-dish-frontend.onrender.com"><button className="bg-sky-500 hover:bg-sky-700 rounded-full px-2"> Click frontend </button></a>
                     <a href="https://door-dish-admin.onrender.com"><button className="bg-sky-500 hover:bg-sky-700 rounded-full px-2"> Click admin panel </button></a>
                    </div>
                </div>
            </div>
             
            <div className="relative">
                <img className="h-[200px] w-[500px]" src={websiteImg2}/>
                <div className="project-disc" >
                    <p className="text-center px-5 py-12">A Ecommerce website.using reactjs, tailwincss, css, html for frontend and back end using nodejs . database mongoDB </p>

                    <div className="text-center	">
                     <a href="https://github.com/imadmohamed/iMad_e-commerce"><button className="bg-sky-500 hover:bg-sky-700 rounded-full px-2"> Click Link </button></a>
                    </div>
                </div>
            </div>
             
            <div className="relative">
                <img className="h-[200px] w-[500px]" src={websiteImg3}/>
                <div className="project-disc" >
                    <p className="text-center px-5 py-12">Amazon Clone Website Using HTML, CSS and JavaScript | Create e-commerce website front-end using HTML and CSS.</p>

                   < div className="text-center	">
                     <a href="https://github.com/imadmohamed/amazon_clone"><button className="bg-sky-500 hover:bg-sky-700 rounded-full px-2"> Click Link </button></a>
                    </div>
                </div>
            </div>
             
        </div>
           
        </div>
      </section>
}
