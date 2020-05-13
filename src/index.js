import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { styled } from 'linaria/react';

const Wrapper = styled.div`
  width: 1em;
`
const NewWrapper = styled(Wrapper)`
  width: 2em;
`

const App = () => (
    <NewWrapper />
);

const appElement = document.createElement('div');
appElement.id = 'root';
document.body.append(appElement);

render(
  <StrictMode>
    <App />
  </StrictMode>,
  appElement,
);