import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';

export default function AboutPage() {
    const link = () => {
        Linking.openURL("https://velog.io/@jiyeah3108")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>HI! 람지의 벨로그에 오신 것을 환영합니다! :) </Text>
            <View style={styles.subContainer}>
                <Image style={styles.profileImage} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"}}/>
                <Text style={styles.subTitle}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                <Text style={styles.content}>아직 많이 부족하지만 열심히 차근차근 피드를 채워나가겠습니다 💪🐿</Text>
                <TouchableOpacity style={styles.linkButton} onPress={()=>link()}><Text style={styles.buttonText}>Click!</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#272C70"
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 80,
        marginHorizontal: 20,
        textAlign: "center"
    },
    subContainer: {
        width: "85%",
        height: "70%",
        backgroundColor: "#fff",
        borderRadius: 30,
        marginTop: 40,
        alignSelf: "center"
    },
    profileImage: {
        width:"50%",
        height:180,
        borderRadius:40,
        marginTop:70,
        alignSelf:"center"
    },
    subTitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 30,
        marginHorizontal: 20,
        textAlign: "center"
    },
    content: {
        fontSize: 19,
        fontWeight: "500",
        marginTop: 30,
        marginHorizontal: 20,
        textAlign: "center"
    },
    linkButton: {
        width:"50%",
        height:50,
        padding:14,
        backgroundColor:"#e9b455",
        borderRadius:15,
        marginTop: 40,
        alignSelf: "center"
    }, 
    buttonText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center"
    }
})