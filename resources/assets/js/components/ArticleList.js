import React from 'react';
import ReactDOM from 'react-dom';



export default class ArticleList extends React.Component{

    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentWillMount(){
        let $this=this;
        axios.get('/api/v1/articles').then(response=>{
           $this.setState({
               data:response.data
           }) ;
        }).catch(error=>{

        });
    }

    render(){
        return(
            <div>


                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data.map((article,i)=>(
                            <tr key={i}>
                                <td>{article.id}</td>
                                <td>{article.title}</td>
                                <td>{article.body}</td>
                                <td>
                                    <a href={"articles/"+article.id}  className="btn btn-primary">Show</a>

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


if(document.getElementById('article-app-list')){
    ReactDOM.render( <ArticleList />,document.getElementById('article-app-list'));
}

