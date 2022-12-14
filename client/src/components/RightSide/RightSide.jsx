import React, {useState} from 'react';
import './RightSide.css';
import Comment from '../../img/comment.png';
import { UilSetting } from "@iconscout/react-unicons";
import Noti from '../../img/noti.png';
import Home from '../../img/home.png';
import TrendCard from '../TrendCard/TrendCard';
import FollowersCard from '../FollowersCard/FollowersCard'
import ShareModal from '../ShareModal/ShareModal';
import { Link } from 'react-router-dom';
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
  <div className="RightSide">
  <div className="navIcons">
    <Link to = '../home'>
    <img src={Home} alt="" /></Link>
    <UilSetting/>
    <img src={Noti} alt="" />
    <Link to="../chat"> 
    <img src={Comment} alt="" />
    </Link>
   
  </div>
  <FollowersCard/>
  
  <button className='button r-button' onClick={()=>setModalOpened(true)}>
  Share
  </button>
 <ShareModal
  modalOpened={modalOpened}
  setModalOpened={setModalOpened}/> </div>
  )
}

export default RightSide;