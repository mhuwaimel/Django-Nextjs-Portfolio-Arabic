'use client'


import { getSocialLinks } from "@/app/_actions/contact";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";


const Social = () => {
    const [loading, setLoading] = useState(false)
    const [social, setSocial] = useState([]);

  const fetchExperience = async() => {
    setLoading(true);
    const socialInfo = await getSocialLinks();
    setSocial(socialInfo);
    setLoading(false);
  };

  useEffect(() => {
    fetchExperience();
 
  }, []);
if(loading){
  return <Loading />
}
  return (
    <ul className='social list-unstyled pt-1 mb-5'>
    {social.map((value, i) => (
      <li key={i}>
        <a href={value.social_url} target='_blank' rel='noreferrer'>
          <i className={value.icon_name}></i>
        </a>
      </li>
    ))}
  </ul>
  )
}

export default Social