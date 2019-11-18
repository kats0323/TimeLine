import React, {Component} from 'react';
import 'antd/dist/antd.css';
import Post from "./components/Post";
import TimeLine from "./components/TimeLine";
import {Layout, Menu} from 'antd';
import './App.css';
const { Header, Footer} = Layout;



export default class Parent extends Component {
    constructor(props){
        super(props)
    }

    render(){
      const footer = {
        position:"absolute",
        bottom:"0",
        width:"100vw",
      }
       return(
           <div className="App">
               <Header />
               <Post />
               <Footer style={footer}/>
           </div>
       )

    }
}