import React from 'react';
import { View, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import AText from './AText';

const GradientText = ({ colors, children, style, shadow = true, ...props }) => {
  const shadowColor = colors[0] || '#000';
  
  const textContent = (
    <MaskedView
      maskElement={
        <AText weight="medium" style={style} {...props}>
          {children}
        </AText>
      }
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <AText weight="medium" style={[style, { opacity: 0 }]} {...props}>
          {children}
        </AText>
      </LinearGradient>
    </MaskedView>
  );

  if (!shadow) {
    return textContent;
  }

  return (
    <View
      style={
        Platform.select({
          ios: [
            {
              shadowColor: shadowColor,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.3,
              shadowRadius: 2,
            },
            {
              shadowColor: shadowColor,
              shadowOffset: { width: 0, height: 3 },
              shadowOpacity: 0.4,
              shadowRadius: 6,
            },
          ],
          android: {
            elevation: 6,
          },
        })
      }
    >
      {textContent}
    </View>
  );
};

export default GradientText;