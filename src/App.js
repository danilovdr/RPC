import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Header from './components/header/header';
import Login from './pages/login/index';
import Register from './pages/register/index';
// import User from './pages/user/user';
// import Beer from './pages/beer/beer';
// import Friends from './pages/friend/friends';
import Evangelie from './pages/evangelie/index';
// import Main from './pages/main/main';
// import Messages from './pages/messages/messages';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        {/* {<Route exact path='/' component={Main}/> */}
        {/* <Route path="/beer" component={Beer}/> */}
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        {/* <Route path="/user" component={User}/> */}
        {/* <Route path="/friends" component={Friends}/>  */}
        <Route path="/evangelie" component={Evangelie}/>
        {/* <Route path="/messages" component={Messages}/> */}
      </div>
      
    </HashRouter>
  );
}

export default App;
