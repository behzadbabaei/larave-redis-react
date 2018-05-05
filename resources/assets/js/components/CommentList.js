import React from 'react';
import ReactDOM from 'react-dom';
import CommentCreate from './CommentCreate';

export default class CommentList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            comments:[]
        }

        this.submitHandler=this.submitHandler.bind(this);
        // this.listen=this.listen.bind(this);
    }

    componentWillMount(){
        let $this=this;
        axios.get('/api/v1/comments/'+this.props.articleId).then(response=>{
            $this.setState({
                comments:response.data
            }) ;
        }).catch(error=>{
            console.log(error);
        });
    }

    componentDidMount(){
        // window.Echo.channel('article.'+this.props.articleId)
        //     .listen('NewComment', (comment) => {
        //         this.setState({
        //             comments:[
        //                 ...this.state.comments,
        //                 comment
        //             ]
        //         });
        //     });


        window.Echo.channel('article.'+this.props.articleId)
            .listen('.NewCommentSubmited', (comment) => {
                this.setState({
                    comments:[
                        ...this.state.comments,
                        comment
                    ]
                });

            });

    }


    submitHandler(data){

        axios.post('/api/v1/comments',{body:data,article_id:this.props.articleId}).then(response=>{
            // console.log(response);

        }).catch(error=>{
            console.log(error);
        });

    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <CommentCreate onFormSubmit={this.submitHandler} articleId={this.props.articleId}/>
                </div>
                <div className="my-3 p-3 bg-white rounded box-shadow">

                    {
                        this.state.comments.map((comment,i)=>(
                            <div key={i}  className="media text-muted pt-3">
                                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray" >{comment.body}</p>
                            </div>
                        ))
                    }
                </div>
            </div>


        );
    }

};
