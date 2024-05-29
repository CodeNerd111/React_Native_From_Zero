import { StyleSheet, View, Image } from "react-native";
import React from "react";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/Listitem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/iphone.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>IPHONE for sale</AppText>
        <AppText style={styles.price}>$1000</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/logo.png")}
            title="Ashutosh Pallai"
            subTitle="10 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
