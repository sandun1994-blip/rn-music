import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Track } from "../../assets/data/types";

const TrackListItem = ({ track }: { track: Track }) => {
//  console.log(track);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: track.album.images[0]?.url }}
        style={styles.image}
      />
      <View style={{}}>
      <Text style={styles.title}>{track.name}</Text>
      <Text style={styles.subtitle}>{track.artists[0].name}</Text>
      </View>
      
    </View>
  );
};

export default TrackListItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 5,
    flexDirection:'row',
    alignItems:'center',
    width:'100%'
    
  },
  title: {
    color: "gray",
    fontWeight: "500",
    fontSize: 16,
  },
  subtitle: {
    color: "gray",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 5,
    marginRight:10
  },
});
