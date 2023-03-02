import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import LogoPNG from './logo.png';
import TripPNG from './trip.png';

export default function App() {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const enter =()=> {
    setError('');
    setLoading(true);
    setTimeout(()=> {
      setLoading(false);
      const _username = username.toLocaleLowerCase();
      if((_username === 'anuprasadnambiar@gmail.com' || _username === 'anuprasadnambiar@gmail') && password === '02march2024himalayan') {
        setAuth(true);
      } else {
        setAuth(false);
        setError('Invalid Credentials')
      }
    }, parseInt(500 + (100 * Math.random())))
  }
  return (
    <Router>
      {!auth && (
        <div style={{ zIndex: 10000, position: 'fixed', bottom:0, left: 0, top: 0, right: 0,  display: 'flex', flexDirection: 'column', padding: '50px', justifyContent: 'center', alignItems: 'center'}}>
          <img alt="" style={{height: '40%', maxHeight: '50vw', marginBottom: '40px'}} src={LogoPNG}/>
          <input placeholder='Email' onChange={e=> setUsername(e.target.value.trim())} value={username}/>
          <input placeholder='Password' onChange={e=> setPassword(e.target.value.trim())} value={password} type="password"/>
          <div className='subbtn' onClick={enter}>{loading ? '-----' : 'ENTER'}</div>
          <div className='error'>{error}</div>
        </div>
      )}
      <div style={{ opacity: auth ? 1 : 0 }}>
        <Switch>
          <Route path="/trips">
            <Trips />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Trips() {
  let match = useRouteMatch();

  return (
    <div >
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  return (
    <div style={{  display: 'flex', flexDirection: 'column', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
      <img alt=""  style={{ width: '50vw', marginBottom: '40px', marginTop: '140px'}} src={TripPNG}/>
      <h3 style={{ fontSize: 40, padding: 50, margin: 0, marginTop: 20, display: 'flex', flexDirection: 'column', fontFamily: 'Gloock' }}>
        <span>Oops!</span> <span>You</span> <span>Missed</span> <span>This</span> <span>Trip!</span></h3>
      <p style={{ fontSize: 16, padding: '50px 50px 20px 50px', margin: 0, textAlign: 'center' }}>Just kidding, This page is still under development because it's being developed by DMC Works. 
        But sooner or later you can see this page is up, and you can find more info about this trip here. Like photos, Videos, Voice notes, phrases and anything that is memorable</p>
      <p style={{ fontSize: 16, padding: '20px 50px 0px 50px', margin: 0, textAlign: 'center' }}>
        Anyway, We are not dissapointing you, Today we will be releasing a song exclusively for you.
      </p>
      <p style={{ fontSize: 16, padding: '10px 50px 20px 50px', margin: 0, textAlign: 'center' }}>
        Happy Birthday Prasad Bhai!
      </p>
      <h3 style={{ fontSize: 20, padding: '20px 50px 20px 50px', margin: 0, textAlign: 'center', color: '#3445de' }}>
        <a href='https://youtu.be/FSizfURDvvY' target="_blank" rel="noreferrer">Euphoria - Agni Vyuham</a>
      </h3>
      <p style={{ fontSize: 16, padding: '20px 50px 150px 50px', margin: 0, textAlign: 'center' }}>
        Please use headphones. 
      </p>
    </div>
  );
}
