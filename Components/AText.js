import React from "react";
import { Text } from "react-native";

export default function AText({ children, style, weight = "regular" }) {
  
  const fontMap = {
    medium: "AeonikMedium",
    light: "AeonikLight",
    bold: "AeonikBold",
    MediumItalic :'AeonikMediumItalic',
    LightItalic:'AeonikLightItalic',
   BoldItalic:'AeonikBoldItalic'

  };

  return (
    <Text style={[{ fontFamily: fontMap[weight] }, style]}>
      {children}
    </Text>
  );
}
