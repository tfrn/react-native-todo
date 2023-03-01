import React, {useState} from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Style from './Style';
export default function Add(props) {
    const [addQuery, setAddQuery] = useState('');

    const handleSearch = () => {
        props.setList([addQuery, ...props.list]);
        setAddQuery('');
    };
  return (
<View style={Style.addView}>
<TextInput style={Style.input}
        placeholder="add todo"
        placeholderTextColor={"gray"}
        value={addQuery}
        onChangeText={(text) => setAddQuery(text)}
      />
<TouchableOpacity style={Style.addButton} onPress={handleSearch}>
  <Text style={{color: 'white', fontSize: 20}}>ekle</Text>
</TouchableOpacity>

</View>
  )
}
