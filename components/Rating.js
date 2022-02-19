import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
export default function Rating() {
  const [defaultRate, setDefaultRate] = useState(2);
  const [maxRate, setMaxRate] = useState([1, 2, 3, 4, 5]);
  const fillStar = "../assets/star_filled.png";
  const OutlineStar = "../assets/star_corner.png";
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {maxRate.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            onPress={() => setDefaultRate(item)}
            style={{ marginHorizontal: 3 }}
          >
            <Image
              source={
                item <= defaultRate ? require(fillStar) : require(OutlineStar)
              }
              style={{ height: 10, width: 10, resizeMode: "cover" }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}