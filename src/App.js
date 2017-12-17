import React, { Component } from 'react';
import './App.css';
import BirthdayForm from './components/BirthdayForm';

class App extends Component {

    render() {
        return (
            <div>
                <div className="hero">
                    <div className="container">
                    <h1 className="hero-title">Cowboy Horoscope</h1>
                    <p className="hero-subtitle">
                        Unlock the wisdom of the Stars, Farmers, and the Great American West.
                    </p>
                    </div>
                </div>
                <BirthdayForm />
                <div className="footer">
                    <div className="container">
                        <p>Made with &hearts; in NY by Carly Litchfield</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
