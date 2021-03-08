import "./styles/Global.module.scss";
import { HashRouter as Router, Route } from 'react-router-dom'
import React from "react";
import FirstPage from './pages/first.page'
import SecondPage from './pages/second.page'
import NavComponent from './component/nav.component'

const App: React.FC = () => {
    return (
        <Router>
            <NavComponent />
            <Route path='/' component={FirstPage} exact />
            <Route path='/2' component={SecondPage} exact />
        </Router>
    );
}

export default App;

