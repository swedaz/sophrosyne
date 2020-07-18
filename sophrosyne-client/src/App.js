import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';

//Redux
import { Provider } from 'react-redux'
import store from './redux/store'
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

//Components
import Navbar from './components/navbar'
import AuthRoute from './util/AuthRoute'

//Pages
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import aboutUs from './pages/aboutUs';
import profile from './pages/profile';
import survey from './pages/survey';
import matches from './pages/matches';
import chat from './pages/chat';
import motivation from './pages/motivation';
import axios from 'axios';
import help from './pages/help';

const theme = createMuiTheme(themeFile);

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <div className= "App">
      <MuiThemeProvider theme = {theme}>
      <Provider store = {store}>
        <Router>
          <Navbar/>
          <div className = "container">
          <Switch>
            <Route exact path = "/home" component = {home}/>
            <Route exact path = "/aboutUs" component = {aboutUs}/>
            <AuthRoute exact path = "/login" component = {login} />
            <AuthRoute exact path = "/signup" component = {signup} />
            <Route exact path = "/home/survey" component = {survey} />
            <Route exact path = "/home/matches" component = {matches} />
            <Route exact path = "/home/chat/:user" component = {chat} />
            <Route exact path = "/home/help" component = {help} />
            <Route exact path = "/home/motivation" component = {motivation} />
          </Switch>
          </div>
        </Router>
      </Provider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
