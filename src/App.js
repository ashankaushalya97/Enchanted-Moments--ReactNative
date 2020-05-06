import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux';

import LoadingScene from './scenes/LoadingScene';
import AuthScene from './scenes/AuthScene';
import Dashboard from './scenes/DashboardScene';
import Home from './scenes/Home';

class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="loading" component={LoadingScene} initial={true} hideNavBar={true} ></Scene>
                    <Scene key="auth" component={AuthScene} hideNavBar={true} direction='vertical'></Scene>
                    <Scene key="dashboard" component={Dashboard} hideNavBar={true}></Scene>
                    <Scene key="home" component={Home} hideNavBar={true}></Scene>
                </Scene>
            </Router>
        );
    }
} 

export default App;