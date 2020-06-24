import React from 'react';
import classes from './TimelineForm.module.scss';
import { reduxForm, Field } from 'redux-form';

class TimelineForm extends React.Component {
    state = {
        editMode: false,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
  render() {
    return (
        <div className={classes.wrapper}>
            {!this.state.editMode &&
            <div className={classes.editModeToggle} onClick={this.activateEditMode}>Add post</div>}
        {this.state.editMode && <form onSubmit={this.props.handleSubmit} >
                <Field
                    autoFocus={true}
                    className={classes.textarea}
                    component={'textarea'}
                    name={'post'}
                    placeholder={'Add new post'}
                />
            <button className={classes.button}>Add</button>
            </form>}
            </div>

    );
  }
}

export default reduxForm({
  form: 'post',
})(TimelineForm);
