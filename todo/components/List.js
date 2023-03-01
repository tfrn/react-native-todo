import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Style from './Style';

export default function List(props) {
    const yeniliste = [...props.list];
    const [cizilenler, setCizilenler] = useState([])
    const ciziliolmayanlar = [];
    yeniliste.filter(item => !cizilenler.includes(item)).forEach(item => ciziliolmayanlar.push(item));
    const sonliste = [...ciziliolmayanlar, ...cizilenler];
  const ciz = (item) =>{
    if(cizilenler.includes(item)){
        const yeniList = cizilenler.filter((eleman) => eleman !== item); // listenin herhangi bir elemanı, gelen itemle aynı değilse yeni listeye ekledik.
        setCizilenler(yeniList); 
    }
    else if(!cizilenler.includes(item)){
        setCizilenler([...cizilenler, item]);
    }
  }

  const sil = (item) =>{
    const yeniList = props.list.filter((eleman) => eleman !== item); // listenin herhangi bir elemanı, gelen itemle aynı değilse yeni listeye ekledik.
    props.setList(yeniList);
  }

useEffect(()=>{
    const count = (props.list.length)-(cizilenler.length); 
    props.setCount(count);
},[cizilenler, props.list]);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => ciz(item)} onLongPress={() => sil(item)}>
      <View style={[Style.cardMain, cizilenler.includes(item) ? Style.ciziliCardMain : null]}>            
          <Text style={[Style.cardText, cizilenler.includes(item) ? Style.ciziliText : null]}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, paddingTop:40}}>
      <FlatList
        style={{flex: 1}}
        data={sonliste}
        contentContainerStyle={{ paddingBottom: 300 }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}
