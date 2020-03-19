import React, { useState, useEffect } from 'react';
import WrapperComponent from '../Components/WrapperComponent';
import withHTTPRequests from '../HOCS/withHTTPRequests';

function UserScreen (props){

  
  const [user, setUser] = useState({});  

  const url = 'https://api.softhouse.rocks/users/' + props.match.params.id;

  useEffect(() => {
    
    if(!user.address) {
      props.customEvent(url);
      setUser(props.users);
    }
    
  }, [user.address, props, url]);

  
    
  
  

    if(user.address) {

      const { 
        address: 
        {city, street, zipcode }
      } = user; // Destructure keys from address object in user
        
      return (
        <WrapperComponent showToggleBtn={true} user={user}>
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


export default withHTTPRequests(UserScreen);