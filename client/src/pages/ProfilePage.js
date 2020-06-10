import React from "react";
import {render} from 'react-dom';
import { Link } from "react-router-dom";
/*import{
     AppRegistry,
     StyleSheet,
     Text,
     View,
     Navigator
} from 'react-native';*/ //You don't need react-native to create this page

import {Container, Row, Col} from 'react-bootstrap';

import "../App.css";

export default class ProfilePage extends React.Component {   
       render(){
          return(
               <Container row>
                    <Row>
                         <Col>1 of 1</Col>
                         </Row>
                         </Container>
              /** <div class="container">
               <div class="row">
                    <div class="col-xs-6">

                         </div> 
                         <div class="col-xs-6">

                         </div>
          
               <div className="searchForm">
                    <form>
                      <input
                      placeholder="Search for..."
                      />
                    </form>
                <ul id="nav">

                </ul>
                </div>
                </div>
               </div>**/
          );
     }

    /**  styles = StyleSheet.create({
          ex:{
               width: Dimensions.get('window').width,
               height: Dimensions.get('window').height
          }
     })**/
}

