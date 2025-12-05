import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientButton = ({ 
  children, 
  onPress, 
  active = false, 
  style,
  textStyle,
  activeOpacity = 0.7 
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, style]}
      activeOpacity={activeOpacity}
    >
      {active ? (
        <View style={styles.shadowContainer}>
          <LinearGradient
            colors={["#F38326", "#DC2626"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <View style={styles.innerBorder}>
              <Text style={[styles.textActive, textStyle]}>
                {children}
              </Text>
            </View>
          </LinearGradient>
        </View>
      ) : (
        <View style={styles.inactive}>
          <Text style={[styles.textInactive, textStyle]}>
            {children}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 20,
    overflow: 'visible',
  },
  shadowContainer: {
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#F97316',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  gradient: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#F38326',
  },
  innerBorder: {
    
   
   
  },
  inactive: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textActive: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
  },
  textInactive: {
    color: '#9CA3AF',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default GradientButton;