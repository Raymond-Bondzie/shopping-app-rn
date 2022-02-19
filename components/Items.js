import {View, Image,StyleSheet, Text, TextInput, TouchableOpacity , FlatList, } from 'react-native'
import { Ionicons,MaterialCommunityIcons , } from '@expo/vector-icons'; 
import React from 'react';
import Rating from './Rating';

const items = [
    {
        name: 'Bike Jacket softshell warm',
        rate: <Rating/>,
        price: '$110',
        image: require("../assets/1.jpeg"),
    },
    {
        name: 'Bike softshell warm',
        rate:  <Rating/>,
        price: '$500',
        image: require("../assets/3.jpeg"),
    },
    {
        name: 'Bike softshell warm',
        rate:  <Rating/>,
        price: '$120',
        image: require("../assets/2.jpeg"),
    },
    {
        name: 'Bike softshell warm',
        rate:  <Rating/>,
        price: '$120',
        image: require("../assets/2.jpeg"),
    },
   
   
   
     
];

const Product = ({item}) => {

    return(
        <View style={{flex: 1, flexDirection: 'row', marginVertical: 20 }}>
            <View style={{flex: 5}}>
        <Image source={item.image} style={{width: 150, height: 150 , justifyContent: 'center'}}  />
            </View>
            <View style={{flex: 5 , justifyContent: 'center',}}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>{item.name}</Text>
                <Text style={{marginTop: 5}}>{item.rate}</Text>
                <Text style= {{fontSize: 18, color: '#7245f7', fontWeight: '700', marginTop: 15}}>{item.price}</Text>
            </View>
        </View>
    )
}


const Items = () => {
    return(
       <View style={{flex: 1, backgroundColor: '#f2f2fa'}}>
         <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20}}>
          <View style={{flex: 5,}}>
              <View style={{width: 40, height: 40, borderRadius: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons name="arrow-back" size={20} color="black" />
              </View>
          </View >
          <View style={{flex: 5}} >
              <View style={{width: 40, height: 40, borderRadius: 40, backgroundColor: 'white', alignSelf: 'flex-end', justifyContent: 'center', alignItems: 'center'}}>
              <MaterialCommunityIcons name="cart-outline" size={20} color="#7245f7" />          
              </View>
          </View>
         </View>

         <View style={{flex: 1.5, justifyContent: 'space-around',paddingHorizontal: 20}}>
         <View >
             <Text style={{fontSize: 20, fontWeight: 'bold'}}>Woman Jacket</Text>
         </View>
         <View style={{backgroundColor: 'white', height: 50 ,justifyContent: 'center', borderRadius: 10,}}>
             <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 20, paddingVertical: 10,}}>
                 <View style={{flex: 5}}>            
                 <TextInput placeholder='Search Jacket'/>
                </View>
                 <View style={{flex: 5}}>            
                 <TouchableOpacity> 
                 <Text style={{alignSelf: 'flex-end',marginTop: 5, color: '#7245f7'}}>Filter</Text>
                 </TouchableOpacity>               
                  </View>
             
             </View>
         </View>
         </View>
         <View style={{flex: 7.5 , paddingHorizontal: 20,}}>
         <FlatList
          data={items}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => <Product item={item} />}
        />
         </View>
       </View>
    )
}

const styles= StyleSheet.create({

})
export default Items