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
      
      <div className={styles.card}>
        {this.state.showContent && this.props.children}
        <div className={styles.btnWrapper}>
          <hr className={styles.cardDivider}/>
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

/* 
    if(this.state.showContent === true) {
      return(
        <div className="card">
          {this.props.children}
          <button onClick={() => {
            this.setState({
              showContent: !this.state.showContent,
            });
          }}>
            Show content
            </button>
        </div>
      )
    }
    else {
      return(
        <div className="card">
          <button onClick={() => {
            this.setState({
              showContent: !this.state.showContent,
            });
          }}>
            Show content
            </button>
        </div>
      )
    }
     */
  }
}

export default WrapperComponent;