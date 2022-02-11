import { StyleSheet , View, Text, TouchableOpacity, Image} from "react-native";

const Shopping = () => {
    return(
        <View style={styles.container}>
            <View style={styles.textcontainer}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>ONLINE SHOPPING</Text>
              <Text>
                  Lorem ipsum is placeholder text commonly used in the graphic, print,
                   and publishing industries for previewing layouts and visual mockups.
                   Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing 
                   industries for previewing layouts and visual mockups.
                   
             </Text>
            </View>

            <View style={styles.imageContainer}>
                <Image source={require("../assets/2.png")} style={{width: 300 , height: "100%"}}/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={{backgroundColor: 'blue', padding: 15, borderRadius: 30, width: 160}}>
                    <Text style={{color: 'white', textAlign: 'center'}}>Next</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.bottom}>
        <View style={{flex: 3}}></View>
        
        <View style={styles.navIndicatorContainer}>
          <View style={(styles.navIndicator, styles.selectedIndicator)}></View>
          <View style={styles.navIndicator}></View>
          <View style={styles.navIndicator}></View>
        </View>
        <View style={styles.skipContainer}>
          <TouchableOpacity style={{ alignSelf: "flex-end" }}>
            <Text
              style={[
                {
                  color: 'grey',
                  alignSelf: "flex-end",
                  fontSize: 17,
                  fontWeight: "bold",
                },
              ]}
            >
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>







        </View>
    )
}

 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: "center",
         alignItems:"center",
         paddingHorizontal: 20
     },

     textcontainer: {
         flex: 3,
         justifyContent: "center"
     },
     imageContainer:{
         flex: 4,
     },

     buttonContainer: {
         flex: 2,
         justifyContent: "center",
         alignItems: "center",
        //  marginHorizontal: 90,
      },

     bottom: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      },
      navIndicatorContainer: {
        flexDirection: "row",
        flex: 3,
        justifyContent: "center",
      },
      navIndicator: {
        backgroundColor: 'grey',
        height: 10,
        width: 10,
        borderRadius: 5,
        margin: 2,
      },
      skipContainer: { 
          flex: 3, alignItems: "center"
         },
     selectedIndicator: {
        backgroundColor: 'blue',
        height: 10,
        width: 15,
        borderRadius: 5,
        margin: 2,
     }    

 })

export default Shopping;