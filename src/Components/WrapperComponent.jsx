import React, { Component } from 'react';
import styles from './WrapperComponent.module.css';

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