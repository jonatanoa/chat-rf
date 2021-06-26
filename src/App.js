import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/layout/Header';
import User from './components/User';
import Routes from './Routes';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAwMOa2bHPqsBfUCcp4keJxH-hk0Bd2yo8",
    authDomain: "chat-app-178ca.firebaseapp.com",
    projectId: "chat-app-178ca",
    storageBucket: "chat-app-178ca.appspot.com",
    messagingSenderId: "825811849937",
    appId: "1:825811849937:web:e48e91bc6eef36eb43ebf0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default class App extends Component {
    render() {
        return (
           <Router>
               <CssBaseline/>
               <Header>
                    <User/>
               </Header>
               <Routes/>
           </Router>
        )
    }
}
