import React, {Suspense} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import {HashRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {setAuthThunk} from "./redux/auth-reducer";
import {initializeApp} from './redux/app-reducer'
import {connect, Provider} from 'react-redux';
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
// implementing lazy loading with react lazy and suspense wrapping
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className="container">
                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Nav/>
                        <div className="app-wrapper-content">
                            <Suspense fallback={<Preloader/>}>
                                <Route path="/login"
                                       render={() => <Login/>}/>
                                <Route path="/profile/:userId?"
                                       render={() => <ProfileContainer/>}/>

                                <Route path="/dialogs"
                                       render={() => <DialogsContainer/>}/>

                                <Route path="/users"
                                       render={() => <UsersContainer/>}/>
                                <Route path="/news" component={News}/>
                                <Route path="/music" component={Music}/>
                                <Route path="/settings" component={Settings}/>
                            </Suspense>
                        </div>
                    </div>
                </div>
            );
        }
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = connect(mapStateToProps, {setAuthThunk, initializeApp})(App);

const AppWithRouterAndProvider = () => {
    return <HashRouter basename={"http://NickPaimon.github.io/react_social"}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
};

export default AppWithRouterAndProvider;