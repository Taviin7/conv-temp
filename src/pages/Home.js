import React, {useState} from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
export default function Home () {
    
    let [temp, setTemp] = useState();
    let [result, setResult] = useState();

    function Converter(){

        let resultado = (9 * parseFloat(temp) + 160) / 5;
        setResult(resultado);

        alert("A temperatura me Fahrenheit é: " +result);
    }

    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Coverter Temperatura</Text>

            <TextInput onChangeText={setTemp} style={styles.input} placeholder="Digite a temperatura"></TextInput>

            <TouchableOpacity  onPress={Converter} style={styles.button}>
                <Text style={styles.buttonText}>Converter</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#B0C4DE',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title:{
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
        margin: 30
    },

    input:{
        backgroundColor: '#FFF',
        fontSize: 20,
        marginTop: 15,
        padding: 15,
        borderRadius: 10,
        textAlign: 'center'
    },
    
    button:{
        backgroundColor: '#EE2C2C',
        padding: 15,
        marginTop: 40,
        borderRadius: 10,
        width: 100,
        alignItems: 'center'
    },

    buttonText:{
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold'
    }
});