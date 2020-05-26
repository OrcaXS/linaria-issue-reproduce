import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { styled } from 'linaria/react';

const Wrapper = styled.div<{ compose: boolean }>`
  width: 1em;
  background-color: ${(props) => (props.compose ? 'transparent' : 'green')};
`
const NewWrapper = styled(Wrapper)<{ compose: boolean }>`
  width: 2em;
  background-color: ${(props) => (props.compose ? 'transparent' : 'red')};
`

const App = (): React.ReactElement => (
  <>
    <Wrapper compose>Test</Wrapper>
    <NewWrapper compose>Test</NewWrapper>
  </>
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