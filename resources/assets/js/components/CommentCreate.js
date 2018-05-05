import React from 'react';
import ReactDOM from 'react-dom';




export default class CommentCreate extends React.Component {

    constructor(props){
        super(props);
        this.state={
            body:''
        }

    }


    handleBodyChange(e){
        this.setState({
            body:e.target.value
        });
    }



    handleSubmit(e){
        e.preventDefault();
       this.props.onFormSubmit(this.state.body);
    }



    render(){
        return(
            <div>
                <h2>Add New User</h2>
                <form className="form-horizental" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="body">New Comments</label>
                        <textarea onChange={this.handleBodyChange.bind(this)} defaultValue={this.state.body} name="body" id="body" cols="70" rows="5">

                        </textarea>

                    </div>

                    <div className="form-group">
                        <button type="submit"  className="btn tbn-success">Save</button>
                    </div>

                </form>

            </div>
        );
    }
}

