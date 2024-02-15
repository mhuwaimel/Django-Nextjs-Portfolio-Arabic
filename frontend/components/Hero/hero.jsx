'use client'
import { getAboutInfo } from "@/app/_actions/about";
import Loading from "@/app/loading";
// import Pdf from '../../asassets/imgets/CV_English.pdf';
import { MotionDiv } from "@/lib/framer";
import Image from "next/image"
import { useEffect, useState } from "react";

const socialVariants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      ease: "easeOut",
    },
  },
};
const Hero = () => {
  const [loading, setLoading] = useState(false)
  const [about, setAbout] = useState([]);

  const fetchAbout = async() => {
    setLoading(true);
    const aboutInfo = await getAboutInfo();
    setAbout(aboutInfo[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchAbout();
 
  }, []);

if (loading) {
  return <Loading />
}
  return (
<div className='row home-details-container align-items-center p-2'>
        
        <div
              
        className='col-12 col-lg-8 offset-lg-4 home-details  text-center '>
          <MotionDiv
            variants={socialVariants}
            initial="initial"
            animate="animate"
            className="socials mb-12 grid grid-cols-3 w-[200px]"
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
          >

<img src={about?.hero_image}  className='img-fluid main-img-mobile d-sm-block d-lg-none'
  alt={about?.title}
        />

      


<h1 style={{fontFamily:'var(--font-rakkas)'}} className='  text-nowrap'>
  {about?.title}
<span

style={{fontFamily:'var(--font-alexandria)'}}>{about?.description}</span>
</h1>
<p  style={{fontFamily:'var(--font-changa)'}}>{about?.second_decription}</p>
<a className='button ' href="/CV_English.pdf" style={{fontFamily:'var(--font-alexandria)'}} target='_blank'  >
  <span className='button-text'>Resume المزيد</span>

<span className='button-icon fa fa-arrow-right'></span>
</a>


          </MotionDiv>
        </div>
        <div
           
    
    // style={{
    //   backgroundImage: `url(${heroImg})`,
    // }}
        >
      <img src={about?.hero_image}
      
      //  priority={true}
      // loading={"lazy"}
      // objectFit="cover"
      // quality={90}
              className='col-lg-4 bg position-fixed d-none d-lg-block '
              alt={about?.title}
              ></img>
        </div>
      </div>
  )
}

const heroSkelton=()=>{
  return (
   
    <p className="card-text placeholder-glow">
      <span className="placeholder col-7"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-4"></span>
      <span className="placeholder col-6"></span>
      <span className="placeholder col-8"></span>
    </p>

  )
}
const heroImageSkelton=()=>{
  return  <img src="..." class="card-img-top" alt="..."></img>
}
export default Hero