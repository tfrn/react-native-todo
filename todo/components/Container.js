import React, {useState} from 'react'
import { Text, View } from 'react-native'
import Add from './Add';
import Header from './Header';
import List from './List';

function Container() {
const [list, setList] = useState([]); 
const [count, setCount] = useState();
  return (
    <View style={{flex: 1}}>
        <Header count={count}></Header>
        <List setList={setList} list={list} setCount={setCount}></List>
        <Add setList={setList} list={list}></Add>
    </View>
  )
}

export default Container;
