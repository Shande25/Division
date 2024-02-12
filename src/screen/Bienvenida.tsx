import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/StackNavigator'

interface Props extends StackScreenProps <RootStackParams, 'Bienvenida'> {};

export const Bienvenida= ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Image style={styles.imagen} source={{ uri: 'https://agenciadeaprendizaje.bue.edu.ar/wp-content/uploads/2021/08/tecnicatura_desarrollo_software-1.jpg'}} />
        <TouchableOpacity style={styles.botones}>
            <Text style={styles.texto} onPress={() => navigation.navigate('Division')}>Entrar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1
  },
  titulo: {
    fontSize: 50,
    color: '#6C22A6',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  imagen: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 10
  },
  botones: {
    backgroundColor: '#6C22A6',
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    width: '80%',
    alignSelf: 'center',
  },
  texto: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  }
})