import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Grid, Container} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import "./home.css"
import CardComponent from "../cardComponent/cardComponent"
import Header from "../header/header";
import {getArticleData} from "../../actions/home"

const Home = (props) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        props.getArticleData()
        setArticles(props.article_data)
    },[props.article_data])

    return (
        <div className="mainContainer">
            <Header {...props}/>
            <div className="article">
                <Container>
                    <Grid columns={1}>
                        <Grid.Row>
                            {
                                (articles || []).map((item, index) => {
                                    return (
                                        <Grid.Column className="gridRow" key={index}>
                                            <CardComponent
                                                data={item || {}}
                                                id={index}
                                            />
                                        </Grid.Column>
                                    )
                                })
                            }
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    const {article_data} = state.home;
    return {
        article_data
    };
};
export default connect(
    mapStateToProps,
    {
        getArticleData
    },
)(Home);

