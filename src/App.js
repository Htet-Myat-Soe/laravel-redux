import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AllStudents from './containers/AllStudents';
import StudentDetails from './containers/StudentDetails';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AllStudents} />
          <Route exact path="/students/:stdId" component={StudentDetails} />
          <Route>404 Not Found !</Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
