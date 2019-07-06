import React from 'react';
import { StyleSheet, Text,TextInput,Button, View,TouchableOpacity} from 'react-native';
import { renderComponent } from 'recompose';
import {Constants} from 'expo';
import { ScrollView } from 'react-native-gesture-handler';
import { black } from 'ansi-colors';


let id=1;



const ViewT=props=>{

  return(
 
    
  <TouchableOpacity onPress={props.mark} onLongPress={props.del}>
    <Text style={{fontSize:18,
    fontFamily:'Roboto',
    textShadowColor:'#ffffff',
    paddingLeft:20,
    textDecorationLine:props.todo.press?'line-through':'none'}}> => 
      {props.todo.texto}
    </Text>
  </TouchableOpacity>
  )
}

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      todoList:[],
    }
  }

  addText(text){
    this.setState({
      temp:this.state.temp=text
    })
    //console.log(this.state.temp)
  }

  onDelete(id){
    this.setState({
      todoList:this.state.todoList.filter(todo=>todo.id!==id)
    })    

  }

  addTodo(){
    if(this.state.temp){
    this.setState({
      todoList:[...this.state.todoList,{texto:this.state.temp,id:id++,press:0}],
      temp:"",
    })
    }
    console.log(this.state.todoList)
  }

  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>What do you wanna do today?</Text>
        </View>

        <TextInput style={{alignSelf:'center' ,paddingTop:24,paddingBottom:24}} onChangeText={this.addText.bind(this)} value={this.state.text} placeholder="Type here!"/>
          
        <View style={{flexDirection:'row',alignSelf:'center'}}>
            <Button style={{alignSelf:'center', paddingTop:24}} title="Add to the list!" onPress={this.addTodo.bind(this)}/>
        </View>

        <View>
            
            <ScrollView style={styles.doodoo}>
              {this.state.todoList.map((todo=><ViewT todo={todo}
                del={()=>this.onDelete(todo.id)}
                mark={()=>todo.press=(!todo.press)}

              />))}
            </ScrollView>

        </View>


        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop:Constants.statusBarHeight,
  },

  header:{
    //flex:1,
    fontSize:24,
    fontFamily:'Roboto',
    textAlign:'center',
  },

  doodoo:{
    paddingTop:24,
    //flex:1,
  },

  //todoo:{
    
  //} 
});
