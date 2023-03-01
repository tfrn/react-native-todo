import React from 'react'
import { View, Text } from 'react-native'
import Style from './Style'
export default function Header(props) {
  return (
<View style={Style.headerMain}>
  <Text style={Style.headerLeft}>Yapılacaklar</Text>
  <Text style={Style.headerRight}>{props.count}</Text>
</View>

  )
}
