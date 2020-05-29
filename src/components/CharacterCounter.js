import React from 'react'
import { useRecoilState } from 'recoil'
import CharacterCount from '../store/hooks'
import { textState } from '../store/atoms'

function CharacterCounter() {
    return (
        <div>
            <TextInput />
            <CharacterCount />
        </div>
    );
}

function TextInput() {
    const [text, setText] = useRecoilState(textState);

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <br />
        Echo: {text}
        </div>
    );
}

export default CharacterCounter