import { View, Text } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <ThemedText>index</ThemedText>
      <Link href="/details">
        <ThemedText>go to /(home)/details</ThemedText>
      </Link>
      <Link href="/(home)">
        <ThemedText>go to /(home)/index</ThemedText>
      </Link>
      <Link href="/(profile)">
        <ThemedText>go to /(profile)</ThemedText>
      </Link>
    </View>
  );
};

export default index;
