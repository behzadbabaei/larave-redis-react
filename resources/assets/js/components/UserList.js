import React from 'react';
import ReactDOM from 'react-dom';



export default class UserList extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentWillMount(){
        let $this=this;
        axios.get('api/v1/users').then(response=>{
           $this.setState({
               data:response.data
           }) ;
        }).catch(error=>{

        });
    }


    handleEdit(user){

    }

    handleDelete(user){
        console.log(user);
        var $this=this;
        axios.delete('/api/v1/users/'+user.id).then(response=>{

            console.log(response);
            const newState=$this.state.data.slice();
            newState.splice(newState.indexOf(user),1);
            $this.setState({
                data:newState
            });

        }).catch(error=>{
            console.log(error);
        });


    }

    render(){
        return(
            <div>


                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((user,i)=>(
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <a href="javascript:;" onClick={this.handleEdit.bind(this,user)} className="btn btn-primary">Edit</a> ||
                                    <a href="javascript:;" onClick={this.handleDelete.bind(this,user)} className="btn btn-danger">Delete</a>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>
        );
    }

};


if(document.getElementById('user-app-list')){
    ReactDOM.render( <UserList />,document.getElementById('user-app-list'));
}

