import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './CommentList';


export default class ArticleShow extends React.Component{

    constructor(props){
        super(props);
        this.state={
            article:''
        }
    }

    componentWillMount(){
        let $this=this;
        // console.log("this is article Id:"+this.props.articleid);
        axios.get('/api/v1/articles/'+this.props.articleid).then(response=>{
            // console.log(response);
           $this.setState({
               article:response.data
           }) ;
        }).catch(error=>{
            console.log(error);
        });
    }


    render(){
        return(
            <div className="col-md-12">

               <h1>{this.state.article.title}</h1>
                <p>{this.state.article.body}</p>

                <div className="comments-holder">
                    <CommentList articleId={this.props.articleid} />
                </div>
            </div>
        );
    }

};

if(document.getElementById('article-app-show')){
    var articleId=$("#article-app-show").data('articleid');
    // console.log(articleId);
    ReactDOM.render( <ArticleShow articleid={articleId}  />,document.getElementById('article-app-show'));
}

