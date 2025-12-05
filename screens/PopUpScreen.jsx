import React from 'react';
import AText from "../Components/AText";

import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PopUpScreen({ visible, onClose, onSetGoals  }) {
  const handleSetGoals = () => {
    onClose();
  };
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        
        <View style={styles.iconContainer}>
          <View style={styles.iconHolder}>
            <Image
              source={require('../assets/Workoutring.png')}
              style={styles.ringsIcon}
              resizeMode="contain"
            />
          </View>
        </View>

        <LinearGradient
          colors={['#0A0A0A', '#1C1C1C']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0.2, y: 0.5 }}
          style={styles.modalContainer}
        >
          <AText weight="medium"  style={styles.title}>Introducing All New{'\n'}Performance Rings!</AText>
          <AText weight="medium"  style={styles.subtitle}>Track all your progress in one place.</AText>

          <TouchableOpacity style={styles.primaryButton} onPress={onSetGoals} activeOpacity={0.85}>
            <AText weight="medium"  style={styles.primaryButtonText}>Set Personalized Goals »</AText>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={onClose} activeOpacity={0.85}>
            <AText weight="medium"  style={styles.secondaryButtonText}>I'll Do it Later ›</AText>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(7, 10, 20, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    position: 'absolute',
    top: '50%',
    marginTop: -180, 
    alignItems: 'center',
    zIndex: 10,
  },
  iconHolder: {
    width: 104,
    height: 104,
    borderRadius: 26,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 12,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  ringsIcon: {
  
  },
  modalContainer: {
    backgroundColor: '#111827',
    borderRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 70, 
    paddingBottom: 28,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    marginTop: 52, 
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 30,
  },
  subtitle: {
    fontSize: 15,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: '400',
  },
  primaryButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 28,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#F3F4F6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  primaryButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 28,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  secondaryButtonText: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '600',
  },
});