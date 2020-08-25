import React, {useState} from 'react';
import {Image, Card, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./cardComponent.css"
const CardComponent = (props) => {
    const [isVisible, setIsVisible] = useState(true);
    const [description, setDescription] = useState([]);
    const handleMoreOption = (id, length, isShow) => {
        let newArray = [];
        newArray[id] = isShow ? length : 700;
        setDescription(newArray);
        setIsVisible(!isVisible)
    }
    return (
        <Card key>
            {props.data.image && <Image src={props.data.image} wrapped ui={false}/>}
            <Card.Content>
                <Card.Header>{props.data.name}</Card.Header>
                <Card.Meta>{props.data.authorName}</Card.Meta>
                {
                    <Card.Description className="description">
                        {
                            props.data.description.substr(0, description[props.data.id] ? description[props.data.id] : 700)
                        }
                        {props.data.description.length > 700 && isVisible && "..."}
                    </Card.Description>
                }
                {
                    props.data.description.length > 700 &&
                    <Button onClick={() => {
                        handleMoreOption(props.data.id, props.data.description.length, isVisible)
                    }}>
                        {isVisible ? "Show More.." : "Show Less.."}
                    </Button>
                }
            </Card.Content>
        </Card>
    )
}
export default CardComponent
