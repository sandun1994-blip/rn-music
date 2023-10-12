import { StyleSheet, FlatList } from "react-native";
import { View, Text } from "../../components/Themed";
import { tracks } from "../../../assets/data/tracks";
import TrackListItem from "../../components/TrackListItem";
import Player from "../../components/Player";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tracks}
        renderItem={({ item }) => <TrackListItem key={item.id} track={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
