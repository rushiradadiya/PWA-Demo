import React from 'react';
import {Grid, Container} from 'semantic-ui-react'
import "./header.css"

const HeaderComponent = (props) =>{
    return(
       <div className="headerContainer">
           <Container>
               <div>
                   Articles & Friends
               </div>
           </Container>
           <Container >
               <Grid>
                    <a className="buttonContainer" onClick={()=>{
                        props.history.push("/home")
                    }}>
                       Home
                    </a>
                   <a className="buttonContainer" onClick={()=>{
                       props.history.push("/friends")
                   }}>
                     Friend
                   </a>
               </Grid>
           </Container>
       </div>
    )
}
export default HeaderComponent
