import React, { useState, useEffect } from 'react';
import WrapperComponent from '../Components/WrapperComponent';
import styles from './Screens.module.css';

function UserScreen (props){

  
  const [user, setUser] = useState({});  
  const [userImg, setUserImg] = useState({});

  useEffect(() => {
    fetch('https://api.softhouse.rocks/users/'+ props.match.params.id)
      .then((response) => response.json()
      .then((response) => 
        setUser(response)
      ));
  }, []);

     
  

    if(user.address) {
      const { city, street, zipcode } = user.address; // Destructure keys from address object in user
      return (
        <WrapperComponent showToggleBtn={true} user={user} img={userImg}>
          <p>{city}</p>
          <p>{street}</p>
          <p>{zipcode}</p>
          
        </WrapperComponent>
      )
    }
    else {
      return (
        <WrapperComponent showToggleBtn={false}>
          <p> No user selected </p>
        </WrapperComponent>

    )
    }
    
}


export default UserScreen;