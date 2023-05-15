import "./leftBar.scss";
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import SmartDisplayRoundedIcon from '@mui/icons-material/SmartDisplayRounded';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import CollectionsRoundedIcon from '@mui/icons-material/CollectionsRounded';
import MessageIcon from '@mui/icons-material/Message';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useContext } from "react";
import { AuthContext } from "../../context/authContex";

const LeftBar = () => {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
           <img src={"/upload/"+currentUser.profilePic} alt=""/>
          <span>{currentUser.name}</span>
        </div>
        <div className="item">
          <Diversity3RoundedIcon/>
          <span>Friends</span>
        </div>  
        <div className="item">
          <GroupRoundedIcon/>
          <span>Groups</span>
        </div>  
        <div className="item">
          <LocalGroceryStoreRoundedIcon/>
          <span>Marketplace</span>
        </div>  
        <div className="item">
          <SmartDisplayRoundedIcon/>
          <span>Watch</span>
        </div> 
        <div className="item">
          <TimerRoundedIcon/>
          <span>Memories</span>
        </div>   
        </div>
        <hr/>
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
          <EmojiEventsRoundedIcon/>
          <span>Events</span>
        </div>  
        <div className="item">
          <SportsEsportsRoundedIcon/>
          <span>Gaming</span>
        </div>  
        <div className="item">
          <CollectionsRoundedIcon/>
          <span>Gallery</span>
        </div>  
        <div className="item">
          <MessageIcon/>
          <span>Messages</span>
        </div>    
        </div>
        <hr/>
        <div className="menu"> 
          <span>Others</span>
          <div className="item">
          <EmojiEmotionsIcon/>
          <span>Tutorials</span>
        </div> 
        <div className="item">
          <ManageAccountsIcon/>
          <span>Account</span>
        </div>   
        <div className="item">
          <EmojiEmotionsIcon/>
          <span>Tutorials</span>
        </div> 
        <div className="item">
          <ManageAccountsIcon/>
          <span>Account</span>
        </div>   
        <div className="item">
          <EmojiEmotionsIcon/>
          <span>Tutorials</span>
        </div> 
        <div className="item">
          <ManageAccountsIcon/>
          <span>Account</span>
        </div>   
        
        </div>
    </div>
    </div>
  )
}

export default LeftBar
