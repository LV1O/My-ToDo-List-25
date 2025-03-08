import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My To-Do List</Text>
      <StatusBar style="auto" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add New Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    bottom: 40,
    alignItems: "center",
    position: "absolute",
  },

  button: {
    backgroundColor: "#814DF6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

