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

      <div className={styles.card} style={this.props.style}>

        {this.state.showContent && this.props.children}
        
        <hr className={styles.cardDivider}/> 

        <div className={styles.btnWrapper}>

          <button className={styles.showcontentBtn} onClick={() => {
            this.setState({
              showContent: !this.state.showContent,
            });
          }}>
            Show content
          </button>
        </div>
      </div>
      
    )

  }
}

export default WrapperComponent;