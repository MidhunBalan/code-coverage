import React,{Component} from 'react';
import Header from "./component/header";
import './app.scss';
import Headline from './component/headline';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

class App extends Component {
  render(){
  return (
      <div className="App">
        <Header/>
        <section className='main'>
            <Headline header="Posts" description="Click the button to render the post" tempArr={tempArr}/>
        </section>
      </div>
    );
  }
}

export default App;
