import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import HeightIcon from '@material-ui/icons/Height';
import {Link} from 'react-router-dom';

class SinglePage extends Component {
    render() {
        return (
            <div className="container">
                 <button class="btn btn-light mt-5">Start</button><br />
                <HeightIcon className="" /><br />
                <AddIcon className=" pointer bg-light rounded-circle" /><br/>
                <HeightIcon className="" /><br/>
                <button class="btn btn-light">Start</button><br />
                <HeightIcon className="" /><br />
                <AddIcon className=" pointer bg-light rounded-circle" data-toggle="modal" data-target="#exampleModal" onClick={this.handleChange}/>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            
                            <div class="modal-footer">
                                <Link to = "/SinglePage" class="btn btn-outline-danger">Add Single Element</Link>
                                <Link to = "/DoublePage" class="btn btn-outline-danger">Add Double Element</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SinglePage
