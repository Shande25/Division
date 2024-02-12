import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export const Division = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState('');

    const Dividir = () => {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2); 

        if (num2 === 0 && num1 !== 0) {
            setResultado('No existe división para cero.');
        } else if (num1 === 0 && num2 === 0) {
            setResultado('La división 0/0 es una indeterminación.');
        } else {
            const respuesta = num1 / num2;
            setResultado(`Resultado de la división: ${respuesta}`);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.entrada} placeholder="Ingrese un número"
            keyboardType="numeric"
            value={numero1}
            onChangeText={setNumero1}
            />
            <TextInput style={styles.entrada}
            placeholder="Ingrese un número"
            keyboardType="numeric"
            value={numero2}
            onChangeText={setNumero2}
            />
            <TouchableOpacity style={styles.button} onPress={Dividir}>
                <Text style={styles.texto}>Dividir</Text>
            </TouchableOpacity>
            <Text style={styles.resultado}>{resultado}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    entrada: {
        borderColor: '#6C22A6',
        borderWidth: 2,
        width: '80%',
        borderRadius: 5,
        marginVertical: 10,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#6C22A6',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    texto: {
        fontSize: 20,
        color: 'white',  
    },
    resultado: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
});