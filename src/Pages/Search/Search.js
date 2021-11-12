import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Search = () => {
    const defaultValue = "hello world saiful islam vai"
    const [inputText,setInputText] = useState(defaultValue)

    const handleText = e => {
        setInputText(e.target.value)
    }
    return (
        <div>
            <Container>
                <h2 className="text-center">{inputText}</h2>
                <div style={{height:'80vh'}} className="d-flex align-items-center justify-content-center w-100">
                    <div className="w-50 text-center">
                        <h3>Search Anything?</h3>
                        <input defaultValue={defaultValue} className="w-100 mx-auto" type="text" onChange={handleText} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Search;