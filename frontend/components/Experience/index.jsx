'use client'

import { getExperience } from "@/app/_actions/experience";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";

const Experience = () => {
  const [loading, setLoading] = useState(false)
    const [experience, setExperience] = useState([]);

  const fetchExperience = async() => {
    setLoading(true);
    const experienceInfo = await getExperience();
    setExperience(experienceInfo);
    setLoading(false);
  };

  useEffect(() => {
    fetchExperience();
 
  }, []);
if(loading){
  return <Loading />
}
  return (
    <ul className='px-10'>
    {experience.map((value, i) => (
      <li key={i}>
        <div className='icon'>
          <i className='fa fa-briefcase'></i>
        </div>
        <p style={{fontFamily:'var(--font-changa)'}} className='time changaFont  text-uppercase'>
          {value.start_date} - {value.end_date}
        </p>
        <h3 style={{fontFamily:'var(--font-changa)'}} >
          {value.position}
          
        </h3>
        <span style={{fontFamily:'var(--font-cairo)'}} className='place cairoFont'>{value.work_place} - {value.description}</span>
        <p className='open-sans-font'>{value.details}</p>
      </li>
    ))}
  </ul>
  )
}

export default Experience