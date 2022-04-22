import NavigationBar from './utilities/navbar';
import RSA from './pages/RSA';
import Intro from './pages/INTRODUCTION';
import Maths from './pages/MATHS';
import DH from './pages/DIFFIE-HELLMAN';
import Home from './pages/HOME';

const App = () => {
  var path = window.location.pathname;
  if (path == "/pages/RSA.js") {
    return(<><NavigationBar /><RSA /></>)
  } else if (path == "/pages/DIFFIE-HELLMAN.js") {
    return(<><NavigationBar /><DH /></>)
  } else if (path == "/pages/MATHS.js") {
    return(<><NavigationBar /><Maths /></>)
  } else if (path == "/pages/INTRODUCTION.js") {
    return(<><NavigationBar /><Intro /></>)
  } else {
    return (<><NavigationBar /><Home /> </>);
  }
}

export default App;
