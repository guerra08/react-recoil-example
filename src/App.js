import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import CharacterCounter from './components/CharacterCounter';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="container">
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
}

export default App;
