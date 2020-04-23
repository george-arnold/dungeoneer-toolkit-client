import React from 'react';
import ReactDOM from 'react-dom';
import CharacterLibrary from './CharacterLibrary';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CharacterLibrary />, div);
  ReactDOM.unmountComponentAtNode(div);
});
