import React, { useState } from "react";
import AText from "../Components/AText";
import GradientButton from "../Components/GradientButton";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SleepGoalScreen({ visible, onClose }) {
  const [sleepHours, setSleepHours] = useState(8.5);

  const incrementHours = () => {
    if (sleepHours < 12) {
      setSleepHours((prev) => Math.round((prev + 0.5) * 10) / 10);
    }
  };

  const decrementHours = () => {
    if (sleepHours > 4) {
      setSleepHours((prev) => Math.round((prev - 0.5) * 10) / 10);
    }
  };

  const handleConfirm = () => {
    console.log("Sleep goal set to:", sleepHours);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <StatusBar barStyle="light-content" />
        <View style={styles.cardWrapper}>
          <LinearGradient
            colors={["#121212", "#000000"]}
            style={styles.gradient}
          >
    
            <View style={styles.handle} />

       
            <View style={styles.iconContainer}>
              <Image source={require("../assets/sleepIcon.png")} />
            </View>

      
            <AText weight="medium" style={styles.title}>
              Set your Daily{"\n"}Recovery/Sleep Goal.
            </AText>
            <AText weight="medium" style={styles.subtitle}>
              Decide daily hours for rest and recovery.{"\n"}
              It strengthens your game.
            </AText>

     
            <View style={styles.selectorContainer}>
              <GradientButton
                active
                onPress={decrementHours}
                style={styles.controlButtonWrapper}
             
                textStyle={styles.controlText}
              >
                −
              </GradientButton>

              <View style={styles.hoursDisplay}>
                <AText weight="medium" style={styles.hoursText}>
                  {sleepHours.toFixed(1)}
                </AText>
                <AText weight="medium" style={styles.hoursLabel}>
                  HOURS PER DAY
                </AText>
              </View>

              <GradientButton
                active
                onPress={incrementHours}
                style={styles.controlButtonWrapper}
                gradientStyle={styles.controlGradientCircle}
                innerStyle={styles.controlInner}
                textStyle={styles.controlText}
                
              >
                +
              </GradientButton>
            </View>

          
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={onClose}
                activeOpacity={0.7}
              >
                <AText weight="medium" style={styles.backButtonText}>
                  ‹ Back
                </AText>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleConfirm}
                activeOpacity={0.7}
              >
                <LinearGradient
                  colors={["#181818", "#0e0d0d"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.confirmGradient}
                >
                  <AText weight="medium" style={styles.confirmButtonText}>
                    Confirm & Proceed ›
                  </AText>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "flex-end",
  },
  cardWrapper: {
    marginBottom: 8,
    borderRadius: 24,
    overflow: "hidden",
  },
  gradient: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
    borderRadius: 24,
  },
  handle: {
    width: 56,
    height: 4,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.25)",
    alignSelf: "center",
    marginBottom: 16,
  },
  iconContainer: {
    alignItems: "center",
    marginTop: 12,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 15,
    color: "#9CA3AF",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 22,
  },
  selectorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
  },
  controlButtonWrapper: {
    width: 60,
    height: 60,
   
  },
  controlGradientCircle: {
    flex: 1,
    borderRadius: 50,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  controlInner: {
    flex: 1,
    borderRadius: 50,
  },
  controlText: {
    fontSize: 30,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  hoursDisplay: {
    alignItems: "center",
    marginHorizontal: 40,
  },
  hoursText: {
    fontSize: 72,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  hoursLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: "#9CA3AF",
    letterSpacing: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
    paddingBottom:10
  },
  backButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
  },
  backButtonText: {
    color: "#E5E7EB",
    fontSize: 16,
    fontWeight: "600",
  },
  confirmButton: {
    flex: 2,
    borderRadius: 22,
    overflow: "hidden",
  },
  confirmGradient: {
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  confirmButtonText: {
    color: "#E5E7EB",
    fontSize: 16,
    fontWeight: "600",
  },
});
