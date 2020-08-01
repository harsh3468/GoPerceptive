import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import TaskCard from '../Component/TaskCard'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {setTask,getData,removeAll} from '../redux/actions/dataAction'
class TaskDash extends Component {
    state = {
        task_data:''
    }
    componentDidMount = ()=>{
        this.props.getData()
    } 
    handleChange = (event)=>{
        this.setState({task_data:event.target.value})
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        this.props.setTask({...this.state,id: (new Date()).getTime()})
        this.setState({task_data:''})
        document.getElementById('outlined-multiline-static').value=''
    }
    handleRemove = (event)=>{
        this.props.removeAll()
    }
    render() {
        return (
            <>
            <Grid container>
            <Grid item xs={6} style={{margin:'auto',paddingTop:'50px',width:'400px'}}>
            <TextField
                    id="outlined-multiline-static"
                    label="Add Your Task Here"
                    multiline
                    rows={2}
                    variant="outlined"
                    fullWidth
                    onChange={this.handleChange}
            />
            
            {this.state.task_data!=''?<Button onClick={this.handleSubmit} disabled={this.state.task_data==''?true:false} style={{background:'#3f51b5',color:'white',margin:'10px 5px'}}>
                ADD TASK
            </Button>
            :<Button disabled={true} style={{background:'grey',color:'white',margin:'10px 5px'}}>
                ADD TASK
            </Button>
            }
            {this.props.tasks.length>0?
            <Button onClick={this.handleRemove} style={{background:'darkred',color:'white',margin:'10px 5px'}}>
                REMOVE ALL
            </Button>
            :''
            }
            </Grid>
            
            </Grid>
            {this.props.tasks.map(item=>(
                <div style={{margin:'10px 80px 5px'}}>
                    <TaskCard item={item} key={item.id}></TaskCard>
                </div>
                ))
                
                }
            </>
        )
    }
}
const mapStateWithProps = (state)=>({
    tasks:state.data.local_data
})
const mapActionWithProps = {
    setTask,getData,removeAll
}
export default connect(mapStateWithProps,mapActionWithProps)(TaskDash)
