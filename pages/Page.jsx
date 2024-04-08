import { StyleSheet, View } from 'react-native'
import DownMenu from '../components/DownMenu'
import { Platform } from 'react-native'

export default function Page({ children, navigation }) {
  return (
    <View style={styles.page}>
      <View style={styles.page__contentContainer}>
        {children}
      </View>
      <DownMenu navigation={navigation} />
    </View>
  )
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 83 : 43,
  },
  page__contentContainer: {
    paddingBottom: 40,
  }
})