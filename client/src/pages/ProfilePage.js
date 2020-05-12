import React from "react";
import {render} from 'react-dom'
import { View, StyleSheet, Text, Dimensions } from 'react-bootstrap';
import "../App.css";
class ProfilePage extends React.Component {
     state ={
          data: [],
          filteredData: []
     };
    
     render(){
          return(
               <div class="container">
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
               </div>
          );
     }

     styles = StyleSheet.create({
          ex:{
               width: Dimensions.get('window').width,
               height: Dimensions.get('window').height
          }
     })
}