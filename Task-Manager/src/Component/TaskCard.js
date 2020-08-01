import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
import { connect } from 'react-redux';
import EditDialog from './EditDialog'
import {deleteTask} from '../redux/actions/dataAction'
import { Grid } from '@material-ui/core';
class TaskCard extends Component {
    state={
        open:false
    }
    handleClose=()=>{
        this.setState({open:false})
    }
    handleOpen=()=>{
        this.setState({open:true})
    }
    handleDelete= (task)=>{
        this.props.deleteTask(task)
    }
    render() {
        return (
            <Grid container >
                <EditDialog open={this.state.open} onClose={this.handleClose} item={this.props.item}></EditDialog>
                <Grid sm={7} style={{margin:'auto'}} item>
                <Paper elevation={3} style={{wordBreak:'break-word',padding:'30px'}}>
                {this.props.item.task_data}

                <div style={{display:'flex',justifyContent:'end'}}>
                <Tooltip title='Delete'>
                <IconButton onClick={()=>(this.handleDelete(this.props.item))}>
                <DeleteIcon></DeleteIcon>
                </IconButton>
                </Tooltip>

                <Tooltip title='Edit'>
                <IconButton onClick={this.handleOpen}>
                <EditIcon></EditIcon>
                </IconButton>
                </Tooltip>
                </div>
                </Paper>
                </Grid>
            </Grid>
        )
    }
}
const mapActionWithProps = {
    deleteTask
}

export default connect(null,mapActionWithProps)(TaskCard)
