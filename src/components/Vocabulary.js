import React, {useState, useEffect} from "react";
import {ListGroup, FormControl} from "react-bootstrap";
import API from '../api/api';

const Vocabulary = () => {

    const [vocabularyList, setVocabularyList] = useState([]);
    const [word, setWord] = useState("");

    useEffect(() => {
        API.get("/vocabulary/words").then(result => {
            setVocabularyList(result.data);
        });
    }, [])

    const handleChange = (event) => {
        setWord(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setVocabularyList(vocabularyList.concat(word))
        }
    }

    return (
        <>
            <FormControl type="text" style={{width: '200px'}} onKeyDown={handleKeyDown} value={word} onChange={handleChange}/>
            <ListGroup>
                {vocabularyList.map(item => (
                        <ListGroup.Item>{item}</ListGroup.Item>
                    )
                )}
            </ListGroup>
        </>
    );
};

export default Vocabulary;
