import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

export default function TaskList({data, deleteItem, editItem}) {
  return (
    <View>
      <Text style={styles.container}>
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => deleteItem(data.key) }>
          <Feather name="trash" color="#FFF" size={20} />
        </TouchableOpacity>

        <View style={{ paddingRight: 10 }}>
          <TouchableWithoutFeedback onPress={() => editItem(data) }>
            <Text style={{ color: '#FFF', paddingRight: 10 }}>
              {data.nome}
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItem: 'center',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: "#121212"
  },
});