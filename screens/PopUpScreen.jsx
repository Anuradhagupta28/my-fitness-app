import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function PopUpScreen({ visible, onClose, onSetGoals }) {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
    <View style={styles.overlay}>

    <LinearGradient
      colors={['#0A0A0A', '#1C1C1C']}
      start={{ x: 0, y: 1 }}
      end={{ x: 0.2, y: 0.5 }}
      style={styles.modalContainer}
    >
      <View style={styles.iconContainer}>
        <View style={styles.iconHolder}>
          <Image
            source={require('../assets/Workoutring.png')}
            style={styles.ringsIcon}
            resizeMode="contain"
          />
        </View>
      </View>

      <Text style={styles.title}>Introducing All New{'\n'}Performance Rings!</Text>
      <Text style={styles.subtitle}>Track all your progress in one place.</Text>

      <TouchableOpacity style={styles.primaryButton} onPress={onSetGoals} activeOpacity={0.85}>
        <Text style={styles.primaryButtonText}>Set Personalized Goals »</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={onClose} activeOpacity={0.85}>
        <Text style={styles.secondaryButtonText}>I'll Do it Later ›</Text>
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
  modalContainer: {
    backgroundColor: '#111827',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 28,
    width: '100%',
    maxWidth: 340,
    alignItems: 'center',
 
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 10,
     borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  iconContainer: {
    position: 'absolute',
    top: -52,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  iconHolder: {
    width: 104,
    height: 104,
    borderRadius: 30,
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
 
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 30,
  },
  subtitle: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 22,
  },
  primaryButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 28,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 28,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  secondaryButtonText: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '600',
  },
});
