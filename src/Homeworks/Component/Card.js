import './styles.css';
import avatar from "./Homer_Simpson_photo.png"
const Card =() => {
  return (
    <div className="card">
    <img src={avatar} alt="Homer Simpson" className='card-avatar'/>
    <h2 className='card-name'>Homer Simpson</h2>
    <p className='card-job'>Occupation: Nuclear Safety Inspector</p>
    <p className='card-hobby'>Hobbies: Eating donuts, watching TV, walking with friends and chilling</p>
    </div>
  );
};

export default Card;
