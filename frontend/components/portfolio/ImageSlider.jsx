import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';

import "react-awesome-slider/dist/styles.css";
const ImageSlider=({ images }) =>{

return (
    <div>
 <AwesomeSlider  cssModule={[CoreStyles]}  animation="cubeAnimation">

    {images && images.map((img)=>(
     <div data-src={img.image} />
    ))}
    
    
  </AwesomeSlider>
</div>


)
}
export default ImageSlider