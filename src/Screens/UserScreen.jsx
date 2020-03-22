import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import WrapperComponent from '../Components/WrapperComponent';
import withHTTPRequests from '../HOCS/withHTTPRequests';


/**
 * @desc Displays the User screen, with a card containing information about a user. 
 * 
 * @param props  HOC fetch method | History object
 */

function UserScreen (props){


  const [user, setUser] = useState({});  

  const url = 'users/' + props.match.params.id;



  useEffect(() => {
    
    if(!user.address) {
      props.getUsers(url)
        .then(response => 
          setUser(response));
    }
    
  }, [user.address, props, url]);



  if(user.address) {

    const { 
      address: 
      {city, street, zipcode }
    } = user;  // Destructure keys from address object in user
      
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

  )}
}

UserScreen.propTypes = {
  getUsers: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  })
};


export default withHTTPRequests(UserScreen);