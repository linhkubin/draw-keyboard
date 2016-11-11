/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class tes1 extends Component {

  constructor(props){ // chay trc render

    super(props);
    
  }


  componentWillMount(){
  // man hinh trc render


    }


  render() {
    return (

      <View style={styles.container}>

            <View style={styles.rows}></View>    
                 
           <View style={styles.columns}>
              <View style={styles.rows}>
                  <Text style={styles.styleNumber}>1</Text>
              </View>
              <View style={styles.rows}>
                  <Text style={styles.styleNumber}>2</Text>
                  <Text style={styles.styleText}>abc</Text>
              </View>
              <View style={styles.rows}>
                  <Text style={styles.styleNumber}>3</Text>
                  <Text style={styles.styleText}>def</Text>
              </View>
           </View>

           <View style={styles.columns}>
              <View style={styles.rows}>
                  <Text style={styles.styleNumber}>4</Text>
                  <Text style={styles.styleText}>ghi</Text>
              </View>
              <View style={styles.rows}>
                  <Text style={styles.styleNumber}>5</Text>
                  <Text style={styles.styleText}>jkl</Text>
              </View>
              <View style={styles.rows}>
                  <Text style={styles.styleNumber}>6</Text>
                  <Text style={styles.styleText}>mno</Text>
              </View>
           </View>

           <View style={styles.columns}>
              <View style={styles.rows}>
                  <Text style={styles.styleNumber}>7</Text>
                  <Text style={styles.styleText}>pqrs</Text>
              </View>
              <View style={styles.rows}>
                  <Text style={styles.styleNumber}>8</Text>
                  <Text style={styles.styleText}>tuv</Text>
              </View>
              <View style={styles.rows}>
                  <Text style={styles.styleNumber}>9</Text>
                  <Text style={styles.styleText}>wxyz</Text>
              </View>
           </View>

           <View style={styles.columns}>
              <View style={styles.rows}></View>
              <View style={styles.rows}></View>
              <View style={styles.rows}></View>
           </View>
          
           
      </View>
     

    );
  }
  componentDidMount(){
  // sau render

  }







}



const styles = StyleSheet.create({
  container: {
    flex: 1,     // can ti le background

  },

  styleNumber:{
  
    fontSize :50,
  },
  styleText:{
   
    fontSize : 30

  },
  columns: {
   
    flex: 1,
    borderBottomColor : "black",
    borderBottomWidth : 1,
    flexDirection :"row",
    
  },
  rows: {

    flex: 1,
    borderRightColor : "black",
    borderWidth : 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

AppRegistry.registerComponent('tes1', () => tes1);
