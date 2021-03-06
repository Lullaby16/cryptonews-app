import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants';
import { Header, InputData } from '../components'
import { AuthContext } from '../services/AuthProvider'

const SignUp = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {register, user} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Header label="Sign Up"/>
            <Text style={styles.title}>SignUp for access App with no Advertisement</Text>
            <KeyboardAvoidingView enabled={true}>
            <InputData
                label="Email :"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.email}
                gaya={styles.textEmail}
            />
            <InputData
                label="Password :"
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={styles.password}
                gaya={styles.textPassword}
            />
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => {
                    register(email, password)
                    navigation.goBack()
                }}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Have an account? <Text style={{color: COLORS.blue}} onPress={() => navigation.navigate("Login")}>Login here</Text></Text>
            {/* <Text style={{color: COLORS.white}}>{user.uid}</Text> */}
            </KeyboardAvoidingView>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray,
    },
    email: {
        color: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.white,
        width: '100%',
        height: 50,
        marginVertical: 10,
        paddingLeft: 8,
    },
    textEmail: {
        alignSelf: 'flex-start',
        color: COLORS.white,
        ...FONTS.body4,
        height: 20,
        //marginTop: 30
    },
    password: {
        color: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.white,
        width: '100%',
        height: 50,
        paddingLeft: 8,
    },
    textPassword: {
        alignSelf: 'flex-start',
        color: COLORS.white,
        ...FONTS.body4,
        height: 20,
        marginTop: 50,
        marginBottom: 10
    },
    fullname: {
        color: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.white,
        width: '100%',
        height: 50,
        marginVertical: 10,
        paddingLeft: 8,
    },
    textFullname: {
        alignSelf: 'flex-start',
        color: COLORS.white,
        ...FONTS.body4,
        height: 20,
    },
    title: {
        color: COLORS.white,
        ...FONTS.body4,
        marginTop: 20,
        alignSelf: 'center'
    },
    button: {
        height: 50,
        width: '90%',
        borderWidth: 1,
        borderColor: COLORS.blue,
        marginTop: 140,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        alignSelf: 'center',
        color: COLORS.blue,
        ...FONTS.body4
    },
    text: {
        color: COLORS.white,
        ...FONTS.body4,
        //marginTop: 20,
        alignSelf: 'center',
        marginTop: 20
    }
})