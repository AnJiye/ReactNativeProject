import React from 'react';
import main from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import data from '../data.json'

export default function MainPage() {
  console.disableYellowBox = true;

  let tip = data.tip;
  let todayWeather = 10 + 17;
  let todayCondition = "흐림"

  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
  <ScrollView style={styles.container}>
    <Text style={styles.title}>나만의 꿀팁</Text>
    <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
    <Image style={styles.mainImage} source={main}/>

    {/* horizontal : 가로 스크롤 / showsHorizontalScrollIndicator : 스크롤바 안 보이도록 */}
    <ScrollView style={styles.middleContainer} horizontal showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.middleButton01}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
      <TouchableOpacity style={styles.middleButton02}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
      <TouchableOpacity style={styles.middleButton03}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
      <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText}>꿀팁 찜</Text></TouchableOpacity>
    </ScrollView>

    <View style={styles.cardContainer}>
         {/* 하나의 카드 영역을 나타내는 View */}
         { 
          tip.map((content,i)=>{
            return (<View style={styles.card} key={i}>
              <Image style={styles.cardImage} source={{uri:content.image}}/>
              <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
              </View>
            </View>)
          })
         }
      </View>

  </ScrollView>)

}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff"
  },
  title: {
    fontSize:20,
    fontWeight:"bold",     // "700"도 가능
    marginTop:60,
    marginLeft:20
  },
  weather: {
    alignSelf:"flex-end",
    paddingRight:20
  },
  mainImage: {
    width:"90%",
    height:200,
    borderRadius:10,
    marginTop:20,
    alignSelf:"center"     // alignItems는 flex 영역 안에 있어야 함
  },
  middleContainer: {
    //borderWidth:1,       // 영역을 눈으로 볼 수 있도록 함 -> 쉽게 하기 위해서!
    marginTop:20,
    marginLeft:10,
    height:60
  },
  middleButton01: {
    width:100,
    height:50,
    padding:18,
    backgroundColor:"#fdc453",
    borderRadius:15,
    margin:7
  },
  middleButton02: {
    width:100,
    height:50,
    padding:18,
    backgroundColor:"#fe8d6f",
    borderRadius:15,
    margin:7
  },
  middleButton03: {
    width:100,
    height:50,
    padding:18,
    backgroundColor:"#9adbc5",
    borderRadius:15,
    margin:7
  },
  middleButton04: {
    width:100,
    height:50,
    padding:18,
    backgroundColor:"#f886a8",
    borderRadius:15,
    margin:7
  },
  middleButtonText: {
    color:"#fff",
    fontWeight:"700",
    textAlign:"center"
  },
  cardContainer: {
    //borderWidth:1,
    marginTop:10,
    marginLeft:10
  },
  card: {
    flex:1,
    flexDirection:"row",
    margin:10,
    borderBottomWidth:0.5,
    borderBottomColor:"#eee",
    paddingBottom:10
  },
  cardImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10
  },
  cardText: {
    flex:2,
    //flexDirection:"column",    // default 값이니까 없어도 됨
    marginLeft:10
  },
  cardTitle: {
    fontSize:20,
    fontWeight:"bold"
  },
  cardDesc: {
    fontSize:15,
    marginTop:3
  },
  cardDate: {
    fontSize:10,
    marginTop:5,
    color:"#A6A6A6"
  }
})