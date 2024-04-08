import { StyleSheet, View, FlatList, Text } from 'react-native'

import OneNews from './OneNews'
import { useState } from 'react'
import DownMenu from './DownMenu'
import Header from './Header'


export default function News({ navigation }) {
  const [news, setNews] = useState([
    {
      label: 'Тема новости',
      text: 'Всем привет, вы на канале куплинов плей, у нас тут постоянно всякие конкурсы и оооочень много всего интересного',
      img: 'peoplesphoto.jpg',
      date: '12 Января 2021 г.',
    },
  ])

  return (
    <View>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <View>
            
            <OneNews />
            <OneNews />
            <OneNews />
            
          </View>
          
        )}
      ></FlatList>
      <DownMenu navigation={navigation} />
    </View>
  )
}
const styles = StyleSheet.create({
  news__container: {
    flex: 1,
  },
})
