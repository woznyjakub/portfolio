import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './components';

const StyledWrapper = styled.div`
  background-color: rebeccapurple;
  color: #eee;
  padding: 1rem;
`;

function App() {
  return (
    <div className="App">
      <StyledWrapper>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </StyledWrapper>
      <Router>
        <GlobalStyle />
        <div>po za</div>
        <Switch>
          <Route exact path="/">
            <span>exact</span> <br />
            <h1>test</h1>
            <h2>test</h2>
            <h3>test</h3>
            <h4>test</h4>
            <h5>test</h5>
            <h6>test</h6>
            <ul>
              <li>list item</li>
            </ul>
            <ol>
              <li>list item</li>
            </ol>
          </Route>
          <Route exact path="/testt">
            <span>test dziala hehehehehe</span> <br />
          </Route>
          <Route path="/index">
            <span>index</span> <br />
          </Route>
          <Route path="/index.html">
            <span>index.html</span> <br />
          </Route>
          <Route path="index">
            <span>""</span> <br />
          </Route>
          <Route path="/">
            <span>no exact</span> <br />
          </Route>
          <Route path="">
            <span>"pusty"</span> <br />
          </Route>
          <Route>
            <span>default1</span> <br />
          </Route>
          <Route>
            <span>default2</span> <br />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
