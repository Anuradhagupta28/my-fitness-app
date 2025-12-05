import React, { useState, useLayoutEffect } from "react";
import AText from "../Components/AText";
import GradientButton from "../Components/GradientButton";
import SleepGoalScreen from "./SleepGoalScreen";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PopUp from "../screens/PopUpScreen";
import GradientText from "../Components/GradientText";

const { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showPopup, setShowPopup] = useState(true);
  const [showSleepGoal, setShowSleepGoal] = useState(false);
const [actionScrollProgress, setActionScrollProgress] = useState(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      tabBarStyle: showSleepGoal
        ? { display: "none" }
        : {
            backgroundColor: "#121212",
            borderColor: "#374151",
            borderWidth: 1,
            height: 80,
            paddingBottom: 10,
            paddingTop: 10,
            borderRadius: 24,
          },
    });
  }, [showSleepGoal, navigation]);

  const handleSetGoals = () => {
    setShowPopup(false);
    setShowSleepGoal(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
const handleActionScroll = ({ nativeEvent }) => {
  const { contentOffset, contentSize, layoutMeasurement } = nativeEvent;
  const maxScroll = contentSize.width - layoutMeasurement.width;

  if (maxScroll <= 0) {
    setActionScrollProgress(1);
    return;
  }

  const progress = contentOffset.x / maxScroll;
  setActionScrollProgress(progress);
};
  const filters = ["All", "Move", "Train", "Recover"];

  const suggestions = [
    {
      name: "Weak Hand Finishing Drill",
      category: "Move",
      duration: "25 min",
      emoji:require("../assets/image1.png"),
       
      gradientColors: ["#FF6B35", "#F97316"],
    },
    {
      name: "10 minute Post-workout Stretching",
      category: "Recover",
      duration: "10 min",
            emoji:require("../assets/image2.png"),
 gradientColors: ["#C084FC", "#A855F7"],
    },
    {
      name: "Jump Rope HIIT",
      category: "Train",
      duration: "20 min",
            emoji:require("../assets/image4.png"),
  gradientColors: ["#FCD34D", "#FBBF24"],
    },
  ];

  const ACTION_CARDS = [
    {
      id: "1",
      title: "Start a Custom\nWorkout",
      image:require("../assets/image3.png"),
      buttonText: "Start Now ››",
      buttonType: "gradient",
    },
    {
      id: "2",
      title: "Take the\nBSA Test",
      image:require("../assets/image4.png"),
      buttonText: "Test Now",
      buttonType: "pill",
    },
    {
      id: "3",
      title: "Do the\nYoga",
      image:require("../assets/image1.png"),
      buttonText: "Test Now",
      buttonType: "pill",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <AText weight="medium" style={styles.welcomeText}>
              Welcome Jordan
            </AText>
            <AText weight="LightItalic" style={styles.dateText}>
              Tuesday, September 9
            </AText>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="calendar-outline" size={22} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={22}
                color="#FFF"
              />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ringsCard}>
          <View style={styles.ringsContainer}>
            <Image
              source={require("../assets/noworkout.png")}
              style={styles.ringsIcon}
              resizeMode="contain"
            />
            <View style={styles.statsContainer}>
              <View style={styles.statRow}>
                <AText weight="medium" style={styles.statText}>
                  Move
                </AText>
                <GradientText
                  colors={["#FFA33A", "#DB0F42"]}
                  style={styles.statPercentage}
                >
                  68%
                </GradientText>
              </View>
              <View style={styles.statRow}>
                <AText weight="medium" style={styles.statText}>
                  Train
                </AText>
                <GradientText
                  colors={["#FFFFAF", "#D29507"]}
                  style={styles.statPercentage}
                >
                  65%
                </GradientText>
              </View>
              <View style={styles.statRow}>
                <AText weight="medium" style={styles.statText}>
                  Recover
                </AText>
                <GradientText
                  colors={["#FA9EFF", "#860ABB"]}
                  style={styles.statPercentage}
                >
                  32%
                </GradientText>
              </View>

              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.viewMoreButton}>
                  <AText weight="medium" style={styles.viewMoreText}>
                    View More
                  </AText>
                  <Ionicons name="chevron-forward" size={14} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewMoreButton}>
                  <AText weight="medium" style={styles.viewMoreText}>
                    •••
                  </AText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <AText weight="medium" style={styles.sectionTitle}>
            Suggested for you
          </AText>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filtersScroll}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {filters.map((filter) => (
              <GradientButton
                key={filter}
                active={activeFilter === filter}
                onPress={() => setActiveFilter(filter)}
                style={{ marginRight: 8 }}
              >
                {filter}
              </GradientButton>
            ))}
          </ScrollView>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, paddingRight: 40 }}
            style={{ marginHorizontal: -20 }}
          >
            {suggestions.map((item, idx) => (
              <View key={idx} style={styles.suggestionCard}>
                <ImageBackground
                 source={item.emoji} 
                  style={styles.suggestionImageBg}
                  imageStyle={{ borderRadius: 20 }}
                >
                
                  <LinearGradient
                    colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]} // <— your 50%-50% gradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.cardGradient}
                  />

                 

                  <View style={styles.suggestionContent}>
                    <Text style={styles.suggestionName}>{item.name}</Text>
                    <View style={styles.suggestionFooter}>
                      <View style={styles.categoryBadge}>
                        <GradientText
                          colors={item.gradientColors}
                          style={styles.categoryText}
                        >
                          {item.category}
                        </GradientText>
                      </View>
                      <Text style={styles.suggestionDuration}>
                        {item.duration}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            ))}
          </ScrollView>
        </View>

       <View style={styles.actionCardsSection}>

  <View style={styles.actionProgressTrack}>
    <View
      style={[
        styles.actionProgressFill,
        { width: `${Math.max(8, actionScrollProgress * 100)}%` },
      ]}
    />
  </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
               onScroll={handleActionScroll}          // 👈 HERE, on the HORIZONTAL scroller
    scrollEventThrottle={16}      
          >
            {ACTION_CARDS.map((item) => (
              <View key={item.id} style={styles.card}>
                <ImageBackground
                  source={item.image }
                  style={styles.bg}
                  imageStyle={{ borderRadius: 20 }}
                >
               
                  <LinearGradient
                    colors={["rgba(0,0,0,0.9)", "rgba(0,0,0,0.3)"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.actionCardGradient}
                  />

               

                  <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    {item.buttonType === "gradient" && (
                      <GradientButton
                        active
                        onPress={() => console.log("Pressed:", item.title)}
                        style={styles.gradientBtn}
                        textStyle={styles.gradientBtnText}
                      >
                        {item.buttonText}
                      </GradientButton>
                    )}

                    {item.buttonType === "pill" && (
                      <TouchableOpacity style={styles.pillBtn}>
                        <View style={styles.iconCircle}>
                          <MaterialCommunityIcons
                            name="basketball"
                            size={18}
                            color="black"
                          />
                        </View>
                        <Text style={styles.pillText}>{item.buttonText}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </ImageBackground>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ height: 120 }} />
      </ScrollView>

      <TouchableOpacity style={styles.aiButtonContainer}>
        <LinearGradient
          colors={[
            "rgba(0,0,0,1)",
            "rgba(0,255,255,0.35)",
            "rgba(150,0,255,0.35)",
            "rgba(255,80,0,0.35)",
            "rgba(0,0,0,0.9)",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.aiGradient}
        >
          <View style={styles.innerContainer}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.aiButtonContent}
            >
              <View style={styles.aiIconWrapper}>
                <Image source={require("../assets/ai-Icon.png")} />
              </View>
              <Text style={styles.aiButtonText}>Ask Ballogy AI</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      <PopUp
        visible={showPopup}
        onClose={handleClosePopup}
        onSetGoals={handleSetGoals}
      />

      <SleepGoalScreen
        visible={showSleepGoal}
        onClose={() => setShowSleepGoal(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "700",
    color: "#FFF",
    letterSpacing: -0.5,
  },
  dateText: {
    fontSize: 15,
    color: "#9CA3AF",
    marginTop: 2,
    fontWeight: "400",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    backgroundColor: "#F97316",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "700",
  },
  ringsCard: {
    marginHorizontal: 20,
    backgroundColor: "#0e0e0e",
    borderRadius: 20,
    padding: 5,
    marginBottom: 32,
    borderColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 1,
  },
  ringsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  ringsIcon: {
    marginLeft: -20,
  },
  statsContainer: {
    flex: 1,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  statText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
  statPercentage: {
    fontSize: 16,
    fontWeight: "700",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 4,
    marginRight: 4,
  },
  viewMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  viewMoreText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 13,
    marginRight: 4,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFF",
    marginBottom: 16,
    paddingHorizontal: 20,
    letterSpacing: -0.5,
  },
  filtersScroll: {
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  suggestionCard: {
    width: 164,
    height: 216,
    borderRadius: 20,
    overflow: "hidden",
    marginLeft: 18,
     borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  suggestionImageBg: {
    flex: 1,
    justifyContent: "flex-end",
  },
  suggestionOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  suggestionContent: {
    padding: 14,
    zIndex: 1,
  },
  suggestionName: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 12,
    lineHeight: 20,
  },
  suggestionFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  categoryBadge: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  categoryText: {
    fontWeight: "700",
    fontSize: 13,
    letterSpacing: 0.5,
  },
  suggestionDuration: {
    color: "#9CA3AF",
    fontSize: 12,
    fontWeight: "500",
  },
 
  card: {
    width: 176,
    height: 154,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 12,
     borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
  },
  bg: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  content: {
    padding: 18,
    flex: 1,
    justifyContent: "space-between",

  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 26,
    letterSpacing: -0.5,
  },
  gradientBtn: {
    width:130,
    
    borderRadius: 25,

   
  },
  gradientBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },
  pillBtn: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.06)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  pillText: {
    fontWeight: "700",
    fontSize: 13,
    color: "#000",
  },
  aiButtonContainer: {
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 20,
  },
  aiGradient: {
    borderRadius: 999,
    padding: 2,
  },
  innerContainer: {
    borderRadius: 999,
    overflow: "hidden",
  },
  aiButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: "rgba(0,0,0,0.65)",
  },
  aiIconWrapper: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    marginRight: 8,
  },
  aiButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  cardGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  actionCardGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  actionCardsSection: {
  marginBottom: 24,
},

actionProgressTrack: {
  height: 3,
  borderRadius: 999,
  backgroundColor: "rgba(255,255,255,0.08)",
  marginHorizontal: 20,
  marginBottom: 10,
  overflow: "hidden",
},

actionProgressFill: {
  height: "100%",
  borderRadius: 999,
  backgroundColor: "#fff", 
},
});
