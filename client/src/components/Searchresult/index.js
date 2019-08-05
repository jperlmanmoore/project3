 import React, {Component} from "react";
 import propTypes from "prop-types"
 import "./Searchresult.css"
 import LanguageButton from"../LanguageButton"
 import LikeButton from "../LikeButton"
 import TranslatedDescription from "../TranslatedDescription"
 
 export default class SearchResult extends Component{
 
     static propTypes ={
         searchIdiom: propTypes.string.isRequired
     }
 
     state = {
         initView:true,
         loading:false,
         idioms:null,
         errorMasg:null
     }

     //call back when the component receive a new idiom
     componentWillReceiveProps (newProps){
         //debugger;
         console.log(newProps);
 
        //set loading...
        this.setState({
         initView:false,
         loading:false,
         idioms: newProps.searchResults
        })
 
     };
 
 render(){
     const{initView,loading,idioms,errorMasg} = this.state
     const {searchIdiom} = this.props
 
     if (initView){
         return <h3>Enter an idiom and look for the explanation...{searchIdiom}</h3>
     }else if (loading){
         return <h3>loading...</h3>
     }else if(errorMasg){
         return <h3>{errorMasg}</h3>
     }else{
         return (           
             <div className="SearchResult">
                 {
                     idioms.map((idioms,index) => (
                     <div className="card rearchCard col-6" key={index}>
                     <div className="card-body">
                       <h5 className="card-title">{idioms.idiom} </h5>
                       <p className="card-text">{idioms.meaning}</p>
                       <LanguageButton />
                       <button href="#" className="btn bg-warning text-dark">Go Translate !</button>
                       <LikeButton />
                       <TranslatedDescription />
                     </div>
                   </div> 
                   ) )
                     }            
          </div>
     
                 );
         }
     };
 }       
  