'use client'
import Hero from "@/components/Hero/hero";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Loading from "./loading";
import { Suspense } from "react";
import PortFolio from "@/components/portfolio";
import ExperienceLayout from "@/components/Experience/ExperienceLayout";
import Address from "@/components/Contact/Address";
import Social from "@/components/Contact/Social";
import Contact from "@/components/Contact/Contact";


const menuItem = [
  { icon: 'fa-home', menuName: 'الرئيسية' },
  { icon: 'fa-list', menuName: 'معرض الأعمال' },
  { icon: 'fa-briefcase', menuName: 'الخبرات المهنية'},
  { icon: 'fa-envelope-open', menuName: 'إتــصل' },
];
export default async function Home() {

  return (
    <div className='yellow '>
    
    {/* End Switcher */}
    <Tabs>
   
      <div className='header'>
        <TabList className=' icon-menu  revealator-slideup revealator-once revealator-delay1'>
          {menuItem.map((item, i) => (
            <Tab style={{fontFamily:'var(--font-mada)'}} className='icon-box ' key={i}>
              <i className={`fa ${item.icon}`}></i>
              <h2>{item.menuName}</h2>
            </Tab>
          ))}
        </TabList>
      </div>
      {/* End Menu Content */}

      <div className='tab-panel_list'>
        {/* Hero Content Starts */}
        <TabPanel className='home '>
          <div
            className='container-fluid main-container container-home p-0 '
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <div className='color-block d-none d-lg-block'></div>

          
<Hero />
          

          </div>
        </TabPanel>
        {/* Hero Content Ends */}

        {/* About Content Starts */}
       
        {/* About Content Ends */}
      
        <TabPanel className='portfolio'>
          <div data-aos='fade-up' data-aos-duration='1200'>
            <div className='title-section text-center'>
          <h1 style={{fontFamily:'var(--font-kufam)'}}>
               معرض <span>الاعمال</span>
              </h1>
             
            </div>
            {/* End title */}
         
          </div>
        
              
              <PortFolio />
          
          
        </TabPanel>
        {/* Portfolio Content Starts */}
        <TabPanel className='about professional'>
          <div
            className='title-section text-center'
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <h1 style={{fontFamily:'var(--font-kufam)'}}>
              الخبرات <span>المهنية</span>
            </h1>
            {/* <span className='title-bg'>الخبرات</span> */}
          </div>
          {/* End title */}
         <ExperienceLayout />
        </TabPanel>
        {/* Portfolio Content Ends */}

        {/* Contact Content Starts */}
        <TabPanel className='contact'>
          <div
            className='title-section  text-center'
            data-aos='fade-up'
            data-aos-duration='1200'
          >
        <h1 style={{fontFamily:'var(--font-kufam)'}}>
            <span>إتــصل</span>  بــي
            </h1>
            {/* <span className='title-bg'>إتــصل</span> */}
          </div>
    
          <div
            className='container'
            data-aos='fade-up'
            data-aos-duration='1200'
          >
            <div className='row'>
              {/*  Left Side Starts */}
              <div className='col-12 col-lg-4'>
                <h3 className='text-uppercase custom-title mb-0 ft-wt-600 pb-3'>
                
                </h3>
                <p className='open-sans-font mb-4'>
                  
                </p>
                <Address />
                {/* End Address */}

                <Social />
                {/* End Social */}
              </div>
              {/* Left Side Ends */}

              {/*  Contact Form Starts  */}
                   <div className='col-12 col-lg-8'>
                <Contact />
               
              </div>
              {/*  Contact Form Ends */}
            </div>
          </div>
          {/* End .container */}
        </TabPanel>
        {/* Contact Content Ends */}
      </div>
    </Tabs>
  </div>
  );
}
