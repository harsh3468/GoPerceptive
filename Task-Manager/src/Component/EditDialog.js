import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import {editTask} from '../redux/actions/dataAction'
class EditDialog extends React.Component {

    state={
      id:'',
      task_data:''
    }

    componentDidMount=()=>{
      this.setState({
          id:this.props.item.id,
          task_data:this.props.item.task_data 
        })
    }
    
    handleChange = (event)=>{
        this.setState({
            task_data:event.target.value 
        })
    }
    
    handleUpdate = ()=>{
        this.props.editTask(this.state)
        this.props.onClose()
    }

render(){
  return (
    <div>
      <Dialog id='dialog' open={this.props.open} onClose={this.props.onClose} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>
        <DialogContent>
          <TextField
          id="outlined-multiline-static"
          label="Add Your Task Here"
          multiline
          
          variant="outlined"
          fullWidth
          defaultValue={this.state.task_data}
          onChange={this.handleChange}
  />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

}
const mapActionWithProps={
    editTask
}

export default connect(null,mapActionWithProps)(EditDialog)