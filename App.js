import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Card from './component/card';
import data from './data';

export default function App() {
  const renderCard = ({ item })=>{
    return <Card picture={item.picture} author={item.author} email={item.email} about={item.about} tags={item.tags} comments={item.comments}/>
  }
  return (
    <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={item => item.id}
        />     
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


