import React, { Component } from 'react';
import styles from './WrapperComponent.module.css';

/**
 * @desc General component for displaying content wrapped in a card. Contains a button for 
 * toggling between showing and hiding content.
 */

class WrapperComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showContent: true,
    }
  }
 
  render() {
    
    
    return(

      <div className={styles.card}>
        
        {this.props.user && <img src="http://placekitten.com/g/250/200" alt="Profile pic"/>}
        {this.props.user && <h4 style={{fontWeight: 'bold'}}>{this.props.user.username}</h4>}
        {this.props.user && <h6>{this.props.user.name}</h6>}
        {this.props.user && <p>{this.props.user.email}</p>}

        {this.state.showContent && this.props.children}
        
        <hr className={styles.cardDivider}/> 

        <div className={styles.btnWrapper}>

          {this.props.showToggleBtn &&<button className={styles.showcontentBtn} onClick={() => {
            this.setState({
              showContent: !this.state.showContent,
            });
          }}>
            Show content
          </button>}

        </div>
      </div>
      
    )

  }
}

export default WrapperComponent;