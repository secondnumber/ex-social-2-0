import React, {ChangeEvent} from 'react';
import classes from './AboutStatus.module.scss';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    getStatus: (id: number) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class AboutStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status,
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
        this.props.updateStatus(this.state.status)
        this.props.getStatus(8712);
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }
        componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        }

    render() {
    return (
      <div>
          {!this.state.editMode &&
            <p onClick={this.activateEditMode.bind(this)} className={classes.text}>{this.props.status || 'No status'}</p>
          }
          {this.state.editMode &&
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} className={classes.input} value={this.state.status}/>
          }
      </div>
    );
  }
}

export default AboutStatus;
