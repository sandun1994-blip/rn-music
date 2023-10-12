import { StyleSheet,FlatList,TextInput } from 'react-native';
import { View,Text } from '../../components/Themed';
import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';




export default function SearchScreen() {

const [search,setSearch] =useState('Default value')


  return (
    <SafeAreaView >
      <View style={styles.header}>
        <FontAwesome name='search' size={16} color={'gray'}/>
        <TextInput placeholder='What do you want to listen to?' style={styles.input} value={search} onChangeText={setSearch}/>
        <Text style={{}} onPress={()=>setSearch('')} >Cancel</Text>
      </View>
     
     <FlatList data={tracks} renderItem={({item})=> <TrackListItem key={item.id} track={item}/>} showsVerticalScrollIndicator={false}/>
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    padding:10

  },
  input:{
flex:1,
backgroundColor:'#121314',
padding:8,
marginHorizontal:10,
borderRadius:5,
color:'white'
  }
 
});
