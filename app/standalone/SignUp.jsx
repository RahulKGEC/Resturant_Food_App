import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AntDesign, Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import RNPickerSelect from 'react-native-picker-select';
// import { CartContext } from '../(drawer)/(tabs)/index'
import { CartContext } from '../(drawer)/(tabs)/index'


const SignUp = () => {
    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(true)
    const { signup, setSignup,addANEWMember,allsignup, setAllsignup } = useContext(CartContext)
  

    const route = useRouter()
    return (
        <SafeAreaView style={{ backgroundColor: "black", flex: 1, position: "relative" }}>
            <ScrollView >
                <View style={{ marginHorizontal: 18 }}>


                    <View
                        style={{
                            height: 35,
                            width: 35,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            backgroundColor: "#C9C9C9",
                            // flexDirection:"row"
                            marginVertical: 19
                        }}
                    >


                        <AntDesign name="left" size={22} onPress={() => route.back()} />

                    </View>

                    <View style={{ gap: 10, justifyContent: "center", alignItems: "center", marginVertical: 26 }} >
                        <Text style={{ color: "white", fontSize: 29, fontWeight: "700" }}>Sign Up</Text>
                        <Text style={{ color: "white" }}> Please sign up to get started</Text>
                    </View>


                </View>

                {/* Last item */}

                <View
                    style={{
                        width: "100%",
                        backgroundColor: "white",
                        borderRadius: 20,
                        marginTop: 20,
                        padding: 20,
                    }}
                >
                    {/* NAME */}
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        placeholder="Rahul"
                        style={styles.input}
                        autoCapitalize="words"
                        value={signup.name}
                        onChangeText={(name) => setSignup({ ...signup, name: name })}
                    />
                    <Text>{JSON.stringify(signup)}</Text>

                    {/* EMAIL */}
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="shawrahula@gmail.com"
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={signup.email}
                        onChangeText={(email) => setSignup({ ...signup, email: email })}

                    />

                    {/* PASSWORD */}
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordBox}>
                        <TextInput
                            placeholder="************"
                            secureTextEntry={show2}
                            style={styles.passwordInput}
                            value={signup.password}
                            onChangeText={(password) => setSignup({ ...signup, password: password })}
                        />
                        <TouchableOpacity onPress={() => setShow2(!show2)}>
                            <Entypo
                                name={show2 ? "eye" : "eye-with-line"}
                                size={23}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>

                    {/* RETYPE PASSWORD */}
                    <Text style={styles.label}>Re-type Password</Text>
                    <View style={styles.passwordBox}>
                        <TextInput
                            placeholder="************"
                            secureTextEntry={show}
                            style={styles.passwordInput}
                            value={signup.re_password}
                            onChangeText={(repass) => setSignup({ ...signup, re_password: repass })}
                        />
                        <TouchableOpacity onPress={() => setShow(!show)}>
                            <Entypo
                                name={show ? "eye" : "eye-with-line"}
                                size={23}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.label}>Gender</Text>
                    <View style={styles.input2}>
                        <RNPickerSelect
                            onValueChange={(value) => setSignup({ ...signup, gender: value })}
                            placeholder={{ label: "Select gender", value: null }}
                            items={[
                                { label: "Male", value: "male" },
                                { label: "Female", value: "female" },
                                { label: "Other", value: "other" },
                            ]}
                            style={{
                                inputIOS: { fontSize: 14, paddingVertical: 8 },
                                inputAndroid: { fontSize: 14, paddingVertical: 8 },
                            }}
                        />
                    </View>

                    {/* BUTTON */}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { addANEWMember(signup)?   route.push('/square'):
                            route.push('/square')
                        }}
                    >
                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    <Text>{JSON.stringify(allsignup)}</Text>
                </View>










            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp

const styles = {
    label: {
        color: "gray",
        fontWeight: "600",
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        backgroundColor: "#E0E0E0",
        padding: 22,
        borderRadius: 14,
        fontSize: 14,
        marginBottom: 15,

    },
    input2: {
        backgroundColor: "#E0E0E0",
        padding: 0,
        borderRadius: 14,
        fontSize: 14,
        marginBottom: 15,

    },
    passwordBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#E0E0E0",
        borderRadius: 14,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
    },
    passwordInput: {
        flex: 1,
        paddingVertical: 12,
    },
    button: {
        height: 50,
        backgroundColor: "#FF7622",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 25,
    },
};