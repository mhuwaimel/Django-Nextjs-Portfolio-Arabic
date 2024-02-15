'use client'

import { getProjects } from '@/app/_actions/projects';
import { Suspense, useEffect, useState } from 'react';
import { Tabs, TabPanel } from 'react-tabs';
import ProjectModal from './Modal/ProjectModal';
import Loading from '@/app/loading';

const PortFolio = () => {
  const [loading, setLoading] = useState(false)
    const [projects, setProjects] = useState([]);
    const [getModal, setGetModal] = useState(false);
    const [modalId, setModalId] = useState(1);
  
    const handleModal = (id) => {
      setGetModal(true);
      setModalId(id);
    };
    const fetchProjects = async() => {
      setLoading(true);
        const projects_data = await getProjects();
        setProjects(projects_data);
        setLoading(false);
      };
    
      useEffect(() => {
        fetchProjects();
     
      }, []);
      if (loading) {
        return <Loading />
      }
  return (
<>
<div dir='rtl' className='portfolio-main'>
    <Tabs>
      <div className='container'>
        <TabPanel>
          <div className='tab-container text-center'>
            {projects.map((item) => {
              const { id, name, main_image, delayAnimation } = item;

              return (
                <div
                  key={id}
                  data-aos='fade-up'
                  data-aos-delay={delayAnimation}
                >
                  <div
                    className='tab-content'
                    onClick={() => handleModal(id)}
                  >
                    <img src={main_image} alt='portfolio project' />
                    <h3>
                      <span className='conent-title'>{name}</span>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  </div>
<Suspense fallback={
  <Loading />
}>
{getModal && <ProjectModal modalId={modalId} setGetModal={setGetModal} />}
</Suspense>
</>
  )
}

export default PortFolio