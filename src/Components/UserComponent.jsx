import React from 'react';
import {
  Link
} from "react-router-dom";
import PropTypes from 'prop-types';

/**
 * @desc Renders an individual user list element, depending on what user is passed in.
 */
function UserComponent(props) {

    return  <li key={props.user.id} style={{
              borderBottom: '1px solid grey',
              height: '35px'}}>
                <Link to={`/user/${props.user.id}`} 
                  style={{color: props.color, fontSize: '20px'}}>
                  {props.user.name}
                </Link>
            </li>
}

UserComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  color: PropTypes.string,
};

export default UserComponent;