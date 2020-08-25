import React, {useEffect, useState} from 'react';
import {Grid,Card, Image, Container, CardHeader} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./friend.css"
import Header from "../header/header";
import ModalComponent from "../modalComponent/modalComponent"
import {connect} from "react-redux";
import {getFriendsData} from "../../actions/friend";

const Friend = (props) => {
    const [isOpenModal,setOpenModal] = useState(false);
    const [isSelectedData, setSelectedData] = useState({})

    const [friends, setFriends] = useState([]);

    useEffect(()=>{
        props.getFriendsData()
        setFriends(props.friend_data)
    },[props.friend_data])
    return (
        <div className="mainContainer">
            <Header {...props}/>
            <div className="friendsgrid">
                <Container>
                    <Grid>
                    <Grid.Row>
                        {
                            friends.map((data, index) => {
                                return (
                                    <Grid.Column className="gridRow" key={index}>
                                        <Card onClick={()=>{setOpenModal(true)
                                            setSelectedData(data)
                                        }}>
                                            <div className="gridimg">
                                                <Image src={data.image} wrapped ui={false} />
                                            </div>
                                            <CardHeader>{data.name}</CardHeader>
                                        </Card>
                                    </Grid.Column>
                                )
                            })

                        }
                    </Grid.Row>
                </Grid>
                </Container>
            </div>
            {
                isOpenModal &&
                <ModalComponent  open={isOpenModal} onClick={()=>setOpenModal(false)} data={isSelectedData} />
            }
        </div>
    )
}

const mapStateToProps = state => {
    const {friend_data} = state.friend;
    return {
        friend_data
    };
};
export default connect(
    mapStateToProps,
    {
        getFriendsData
    },
)(Friend);


