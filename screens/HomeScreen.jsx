import React, { useState } from "react";
import AText from "../Components/AText";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import PopUp from "../screens/PopUpScreen";

const { width } = Dimensions.get("window");
// const CARD_WIDTH = (width - 16 * 2) / 2;

export default function HomeScreen() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showPopup, setShowPopup] = useState(true);

  const handleSetGoals = () => {
    setShowPopup(false);
    console.log("Set Goals pressed");
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const filters = ["All", "Move", "Train", "Recover"];
  const completedWorkouts = [
    { name: "Tennis Wall Pr...", duration: "45 min" },
    { name: "Back & Biceps", duration: "1h 30m" },
  ];

  const suggestions = [
    {
      name: "Weak Hand Finishing Drill",
      category: "Move",
      duration: "25 min",
      emoji: "https://media.istockphoto.com/id/2027278927/photo/young-athletic-woman-exercising-with-barbell-during-sports-training-in-a-gym.jpg?s=612x612&w=0&k=20&c=ifFL7Mqc8NwTj25PAx4ONy1OOQZvc1S_kVOofsbLgFw=",
      color: "#F97316",
    },
    {
      name: "10 minute Post-workout Stretching",
      category: "Recover",
      duration: "10 min",
      emoji: "https://img.freepik.com/premium-photo/man-break-stretching-gym-floor-fitness-workout-training-strong-muscles-heart-health-cardio-wellness-japanese-personal-trainer-sports-person-coach-body-warmup-exercise_590464-282205.jpg?w=360",
      color: "#A855F7",
    },
    {
      name: "Jump Rope HIIT",
      category: "Train",
      duration: "20 min",
      emoji: "https://media.istockphoto.com/id/1449353914/photo/fitness-gym-and-black-man-doing-a-workout-with-weights-for-strength-wellness-and-training.jpg?s=612x612&w=0&k=20&c=ozKkP-4W7Fg7c77s3-gE7QsxX51BJVEKi6LOxIMk8M0=",
      color: "#FBBF24",
    },
  ];

  const ACTION_CARDS = [
    {
      id: "1",
      title: "Start a Custom\nWorkout",
      image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      buttonText: "Start Now ››",
      buttonType: "gradient",
    },
    {
      id: "2",
      title: "Take the\nBSA Test",
      image: "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      buttonText: "Test Now",
      buttonType: "pill",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
    
        <View style={styles.header}>
          <View>
            <AText weight="medium" style={styles.welcomeText}>Welcome Jordan</AText>
            
            <AText weight="LightItalic" style={styles.dateText}>Tuesday, September 9</AText>
   

     

          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="calendar-outline" size={22} color="#FFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="chatbubble-outline" size={22} color="#FFF" />
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
                <AText weight="medium" style={styles.statText}>Move</AText>
                <AText weight="medium" style={[styles.statPercentage, { color: "#EC4899" }]}>68%</AText>
              </View>
              <View style={styles.statRow}>
                <AText weight="medium" style={styles.statText}>Train</AText>
                <AText weight="medium" style={[styles.statPercentage, { color: "#FBBF24" }]}>65%</AText>
              </View>
              <View style={styles.statRow}>
                <AText weight="medium" style={styles.statText}>Recover</AText>
                <AText weight="medium" style={[styles.statPercentage, { color: "#A855F7" }]}>32%</AText>
              </View>
              
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.viewMoreButton}>
                  <AText weight="medium" style={styles.viewMoreText}>View More</AText>
                  <Ionicons name="chevron-forward" size={14} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewMoreButton}>
                  <AText weight="medium" style={styles.viewMoreText}>•••</AText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

       


        <View style={styles.section}>
          <AText weight="medium" style={styles.sectionTitle}>Suggested for you</AText>

   
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filtersScroll}
            contentContainerStyle={{ paddingRight: 20 }}
          >
            {filters.map((filter) => (
              <TouchableOpacity
                key={filter}
                onPress={() => setActiveFilter(filter)}
                style={[
                  styles.filterPill,
                  activeFilter === filter && styles.filterPillActive,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    activeFilter === filter && styles.filterTextActive,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
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
                  source={{ uri: item.emoji }}
                  style={styles.suggestionImageBg}
                  imageStyle={{ borderRadius: 20 }}
                >
                  <View style={styles.suggestionOverlay} />
                  <View style={styles.suggestionContent}>
                    <Text style={styles.suggestionName}>{item.name}</Text>
                    <View style={styles.suggestionFooter}>
                      <View
                        style={[styles.categoryBadge, { backgroundColor: item.color }]}
                      >
                        <Text style={styles.categoryText}>{item.category}</Text>
                      </View>
                      <Text style={styles.suggestionDuration}>{item.duration}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.actionCardsSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20 }}
          >
            {ACTION_CARDS.map((item) => (
              <View key={item.id} style={styles.card}>
                <ImageBackground
                  source={{ uri: item.image }}
                  style={styles.bg}
                  imageStyle={{ borderRadius: 20 }}
                >
                  <View style={styles.overlay} />
                  <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    {item.buttonType === "gradient" && (
                      <LinearGradient
                        colors={["#F97316", "#DC2626"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.gradientBtn}
                      >
                        <Text style={styles.gradientBtnText}>{item.buttonText}</Text>
                      </LinearGradient>
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

    "rgba(0,0,0,0.9)"
  ]}    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.aiGradient}
  >
    <View style={styles.innerContainer}>

      <TouchableOpacity activeOpacity={0.9} style={styles.aiButtonContent}>
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
   
    marginLeft:-20
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
  menuButton: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.15)",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  menuButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 2,
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
  filterPill: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 8,
  },
  filterPillActive: {
    backgroundColor: "#F97316",
  },
  filterText: {
    color: "#9CA3AF",
    fontWeight: "600",
    fontSize: 15,
  },
  filterTextActive: {
    color: "#FFF",
  },
  suggestionCard: {
    width: 164,
    height: 216,
    borderRadius: 20,
    overflow: "hidden",
   
    marginLeft:18
  },
  suggestionImageBg: {
    flex: 1,
    justifyContent: "flex-end",
  },
  suggestionOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  suggestionImage: {
    height: 140,
    backgroundColor: "#374151",
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
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "700",
  },
  suggestionDuration: {
    color: "#9CA3AF",
    fontSize: 12,
    fontWeight: "500",
  },
  actionCardsSection: {
    marginBottom: 24,
    //  borderColor:'red',
    // borderWidth:2
  },
  card: {
    width: 176,
    height: 154,
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 12,
    
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: "flex-start",
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
    bottom: 40,
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

 

});