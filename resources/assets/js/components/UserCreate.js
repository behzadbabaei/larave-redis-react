import React from 'react';
import ReactDOM from 'react-dom';




export default class UserCreate extends React.Component {

    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    handleNameChange(e){
        this.setState({
            name:e.target.value
        });
    }

    handleEmailChange(e){
        this.setState({
            email:e.target.value
        });
    }

    handlePassowrdChange(e){
        this.setState({
            password:e.target.value
        });
    }



    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);

        axios.post('/api/v1/users',this.state).then(response=>{
            console.log(response);
        }).catch(error=>{
            console.log(error);
        });
    }



    render(){
        return(
            <div>
                <h2>Add New User</h2>
                <form className="form-horizental" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="name">Name</label>
                        <input  type="text" id="name" onChange={this.handleNameChange.bind(this)} name="name" value={this.state.name} placeholder="Enter Name" className="form-control"   />
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">Email</label>
                        <input  type="text" id="email" onChange={this.handleEmailChange.bind(this)} name="email" value={this.state.email} placeholder="Enter Email" className="form-control"   />
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="password">Password</label>
                        <input  type="text" id="password" onChange={this.handlePassowrdChange.bind(this)} value={this.state.password} name="password" placeholder="Enter Password" className="form-control"   />
                    </div>

                    <div className="form-group">
                        <label className="col-sm-offset-2 col-sm-10" htmlFor="password">Password</label>
                        <button type="submit"  className="btn tbn-success">Save</button>
                    </div>
                </form>

            </div>
        );
    }
}


if(document.getElementById('user-app-create')){
    ReactDOM.render( <UserCreate />,document.getElementById('user-app-create'));
}

