import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, AppRegistry } from 'react-native';
import Card from './component/card';
import data from './data';

export default function App() {
  return (
    <View style={styles.container}>
      {data.map((element)=>{
        <Card key={element.id} picture={element.picture} author={element.author} about={element.about} tags={element.tags} comments={element.comments}/>
      })}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('Appname', () => App);
