import React, {useState, useEffect} from "react";
import ListGroup from "react-bootstrap/ListGroup";
import API from '../api/api';

const Container = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        API.get("/vocabulary/words").then(result => {
            setData(result.data);
        });
    }, [])

    return (
        <ListGroup>
            {data.map(item => (
                    <ListGroup.Item key={item}>{item}</ListGroup.Item>
                )
            )}
        </ListGroup>
    );
};

export default Container;
