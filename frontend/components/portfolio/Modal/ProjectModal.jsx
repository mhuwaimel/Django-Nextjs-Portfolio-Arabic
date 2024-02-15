'use client'

import { getProjectDetails, getProjects } from '@/app/_actions/projects';
import { useEffect, useState } from 'react';
import React from 'react'
import CloseImg from '@/assets/img/cancel.svg';
import ImageSlider from '../ImageSlider';
import Loading from '@/app/loading';
const ProjectModal = ({ modalId, setGetModal }) => {
  const [loading, setLoading] = useState(false)
    const [project, setProject] = useState([]);
    const fetchProject = async() => {
        setLoading(true);
        const projects_data = await getProjectDetails(modalId);
        setProject(projects_data[0]);
        setLoading(false);
      };
    
      useEffect(() => {
        fetchProject();
     
      }, []);
      if (loading) {
        return <Loading />
      }
  return (
    <div dir='rtl'  className='modal_portfolio'>
    <div className='modal__outside' onClick={() => setGetModal(false)}></div>
    <div className='modal__content'>

          <div  data-aos='fade'>
        <h1 style={{fontFamily:'var(--font-tajawal)'}} className='heading mb-2'>{project.name}</h1>
            <div className='modal__details'>
            <div  className='row open-sans-font'>
                    <div className='col-12  mb-2'>
                      <i className='  p-2 text-lg'></i>
                    
                      <p style={{fontFamily:'var(--font-changa)'}} className='ft-wt-600 '>
                        {project.description}
                      </p>
                   
                    </div>
                  
                    <div className='col-12 col-sm-7 mb-2'>
                      <i className='fa fa-code preview-link text-3xl  p-2'></i>
                      
                      <b className='ft-wt-600 uppercase'>
                    {project.tags?.map((tag)=>{
                      return <span>{tag.name},</span>
                    })}
                      </b>
                    </div>
                    <div className='col-12 col-sm-5 mb-2'>
                      <i className='fa fa-external-link p-2'></i>
                 
                      <a
                        className='preview-link'
                        target='_blank'
                        rel='noopener noreferrer nofollow'
                        href={project.link}
                      >
                       Visit
                      </a>
                   
                    </div>
                    <ImageSlider images={project.project_images} />
                  </div>
            </div>
            {/* <figure className='modal__img'>
              <img src={item.Image} alt='portfolio project' />
            </figure> */}
          
            <button
              className='close-modal'
              onClick={() => setGetModal(false)}
            >
              <img src={CloseImg} alt='portfolio project' />
            </button>
          </div>
       
    </div>
  </div>
  )
}

export default ProjectModal