import React from 'react';
import classes from './AboutStatus.module.scss';

class AboutStatus extends React.Component {
    state = {
        editMode: false,
    }
    activateEditMode() {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false,
        })
    }
  render() {
    return (
      <div>
          {!this.state.editMode &&
            <p onClick={this.activateEditMode.bind(this)} className={classes.text}>{this.props.status}</p>
          }
          {this.state.editMode &&
            <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} className={classes.input} placeholder={this.props.status}/>
          }
      </div>
    );
  }
}

export default AboutStatus;
