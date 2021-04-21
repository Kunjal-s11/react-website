import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import {Switch,Route} from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      currentUser: null
    };
  }
  unsubcribeFromAuth = null

  componentDidMount(){
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }

          });
          
        });
        
      }
      this.setState({currentUser: userAuth});



      });
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header  />
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact={true} path='/shop' component={ShopPage}/>
        <Route exact={true} path='/signIn' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}
}
    
export default App;
