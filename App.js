import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>

      <Text style={styles.title}>My ToDo List</Text>
      <StatusBar style="auto" />

      <Text style={styles.todos}>Buy Milk</Text>
      <Text style={styles.todos}>Buy Bread</Text>
      <Text style={styles.todos}>Buy Eggs</Text>

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
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    paddingTop: 70,
  },

  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#814DF6",
    textAlign: "center",
    padding: 12,
    marginBottom: 25,
    borderBottomWidth: 4,
    borderBottomColor: "#814DF6",
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

  todos: {
    backgroundColor: "#EDBF40",
    width: "90%",
    color: "#fff",
    padding: 10,
    borderRadius: 7,
    margin: 7,
    fontSize: 20,
    fontWeight: "bold",
  },

});

