import {View, Image,StyleSheet, Text, TextInput, TouchableOpacity, } from 'react-native'
import { Ionicons,MaterialCommunityIcons ,AntDesign } from '@expo/vector-icons'; 
import Rating from './Rating';




const ItemDetail = () => {
    return(
        <View style={{flex: 1, backgroundColor: '#f2f2fa', paddingVertical: 20}}>
         <View style={{flex: 4.8 , paddingHorizontal: 20,}}>

             <View style={{flex: 1, flexDirection: 'row'}}>
              <View style= {{flex : 5}}>
              <View style={{width: 40, height: 40, borderRadius: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
              <Ionicons name="arrow-back" size={20} color="black" />
              </View>
              </View>
              <View style= {{flex : 5,}}>
              <View style={{width: 40, height: 40, borderRadius: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end'}}>
              <MaterialCommunityIcons name="cart-outline" size={20} color="#7245f7" />          
              </View>
              <View style={{width: 40, height: 40, borderRadius: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end', marginTop: 15}}>
              <AntDesign name="hearto" size={20} color="#7245f7" />             
               </View>
              </View>
             </View>

             <View style={{flex: 9, alignItems: 'center', justifyContent: 'center'}}>
                 <Image source={require('../assets/1.jpeg')} style={{ width: '80%', height: '85%'}}/>
             </View>


         </View>
         <View style={{flex: 2.2, paddingHorizontal: 20 , justifyContent: 'space-around'}}>
             <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Red Jacket</Text>

                <View style={{marginTop: 5}}>
                 <Text>Review : <Rating/></Text>
             </View>
             </View>
            
             <View style={{borderBottomWidth: 4, borderBottomColor: '#7245f7' , width: 50, borderRadius: 10, marginLeft: 20}}></View>
             <View style={{marginLeft: 20}}>
                 <Text>this is a quality jacket made in vietnam</Text>
                 <View style={{marginTop: 5}}>
                 <Text>It can keep you worm even if the temperature is at 0°C</Text>
             </View>
             </View>
             
         </View>




         <View style={{flex: 1.7, justifyContent: 'space-between'}}>
            <View style={{ flex: 5}}>
            <View style={{backgroundColor: 'white' , height: 50 , justifyContent: 'center' ,width: '75%' ,}}>
                 <Text style={{textAlign: 'center' , color: '#7245f7'}}>Material : 91% polyester, 9% elastane</Text>
             </View>
            </View>

             <View style={{flex: 5 , flexDirection: 'row' , justifyContent: 'space-evenly', paddingEnd: '30%', paddingStart: 25, marginTop: 20}}>
                 <View style={{alignItems: 'center', justifyContent: 'center' , backgroundColor: 'white', width: 32, height: 32 , borderRadius: 5}}>
                     <Text style={{fontSize: 12, fontWeight: '700'}}>XS</Text>
                 </View>
                 <View style={{alignItems: 'center', justifyContent: 'center' , backgroundColor: 'white', width: 32, height: 32 , borderRadius: 5}}>
                     <Text  style={{fontSize: 12, fontWeight: '700'}}>S</Text>
                 </View>
                 <View style={{alignItems: 'center', justifyContent: 'center' , backgroundColor: '#7245f7', width: 32, height: 32 , borderRadius: 5}}>
                     <Text style={{color: 'white',fontSize: 12, fontWeight: '700'}}>M</Text>
                 </View>
                 <View style={{alignItems: 'center', justifyContent: 'center' , backgroundColor: 'white', width: 32, height: 32 , borderRadius: 5}}>
                     <Text  style={{fontSize: 12, fontWeight: '700'}}>L</Text>
                 </View>
                 <View style={{alignItems: 'center', justifyContent: 'center' , backgroundColor: 'white', width: 32, height: 32 , borderRadius: 5}}>
                     <Text  style={{fontSize: 12, fontWeight: '700'}}>XL</Text>
                 </View>
             </View>
         </View>


         <View style={{flex: 1.3, alignItems: 'center'}}> 
           <View style={{backgroundColor: '#7245f7', flex: 1, width: '80%', flexDirection: 'row' , alignItems: 'center' , paddingHorizontal: 20, marginBottom: 18, borderRadius: 15 , marginTop: 10}}>
               <View style={{flex: 5}}>
                   <Text style={{color: 'white', fontSize: 10}}>Total Amount</Text>
                   <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>$110</Text>
               </View>
               <View style={{flex: 5}}>
                   <TouchableOpacity style={{alignSelf: 'flex-end', backgroundColor: '#4b1cd9' , padding:10 , borderRadius: 10 , paddingHorizontal: 20}}>
                       <Text style={{color: 'white', fontWeight: '700'}}>Add to Cart</Text>
                   </TouchableOpacity>
               </View>
           </View>
         </View>
        </View>
    )
}

export default ItemDetail;
