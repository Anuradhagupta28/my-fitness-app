import React, { useState, useEffect } from "react";
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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import PopUp from "../screens/PopUpScreen";
const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 16 * 2) / 2;
export default function HomeScreen() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  
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
      emoji:
        "https://media.istockphoto.com/id/2027278927/photo/young-athletic-woman-exercising-with-barbell-during-sports-training-in-a-gym.jpg?s=612x612&w=0&k=20&c=ifFL7Mqc8NwTj25PAx4ONy1OOQZvc1S_kVOofsbLgFw=",
      color: "#F97316",
    },
    {
      name: "10 minute Post-workout Stretching",
      category: "Recover",
      duration: "10 min",
      emoji:
        "https://img.freepik.com/premium-photo/man-break-stretching-gym-floor-fitness-workout-training-strong-muscles-heart-health-cardio-wellness-japanese-personal-trainer-sports-person-coach-body-warmup-exercise_590464-282205.jpg?w=360",
      color: "#A855F7",
    },
    {
      name: "Jump Rope HIIT",
      category: "Train",
      duration: "20 min",
      emoji:
        "https://media.istockphoto.com/id/1449353914/photo/fitness-gym-and-black-man-doing-a-workout-with-weights-for-strength-wellness-and-training.jpg?s=612x612&w=0&k=20&c=ozKkP-4W7Fg7c77s3-gE7QsxX51BJVEKi6LOxIMk8M0=",
      color: "#FBBF24",
    },
  ];
  const ACTION_CARDS = [
    {
      id: "1",
      title: "Start a Custom\nWorkout",
      image:
        "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      buttonText: "Start Now ››",
      buttonType: "gradient",
    },
    {
      id: "2",
      title: "Take the\nBSA Test",
      image:
        "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
            <Text style={styles.welcomeText}>Welcome Jordan</Text>
            <Text style={styles.dateText}>Tuesday, September 9</Text>
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
                <View style={styles.statLabel}>
                  <Text style={styles.statText}>Move</Text>
                </View>
                <Text style={[styles.statPercentage, { color: "#EC4899" }]}>
                  68%
                </Text>
              </View>

              <View style={styles.statRow}>
                <View style={styles.statLabel}>
                  <Text style={styles.statText}>Train</Text>
                </View>
                <Text style={[styles.statPercentage, { color: "#FBBF24" }]}>
                  65%
                </Text>
              </View>

              <View style={styles.statRow}>
                <View style={styles.statLabel}>
                  <Text style={styles.statText}>Recover</Text>
                </View>
                <Text style={[styles.statPercentage, { color: "#A855F7" }]}>
                  32%
                </Text>
              </View>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <TouchableOpacity style={styles.viewMoreButton}>
                  <Text style={styles.viewMoreText}>View More</Text>
                  <Ionicons name="chevron-forward" size={16} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewMoreButton}>
                  <Text style={styles.viewMoreText}>...</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Completed Workouts</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
            <TouchableOpacity style={styles.newButton}>
              <Ionicons name="add" size={20} color="black" />
              <Text style={styles.newButtonText}>New</Text>
            </TouchableOpacity>
            {completedWorkouts.map((workout, idx) => (
              <View key={idx} style={styles.workoutCard}>
                <Text style={styles.workoutName}>{workout.name}</Text>
                <Text style={styles.workoutDuration}>{workout.duration}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Suggested for you</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filtersScroll}
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
            style={styles.suggestionsScroll}
          >
            {suggestions.map((item, idx) => (
              <View key={idx} style={styles.suggestionCard}>
                <View style={styles.suggestionImage}>
                  <Image
                    source={{ uri: item.emoji }}
                    style={{ width: "100%", height: 200 }}
                  />
                </View>
                <View style={styles.suggestionContent}>
                  <Text style={styles.suggestionName}>{item.name}</Text>
                  <View style={styles.suggestionFooter}>
                    <View
                      style={[
                        styles.categoryBadge,
                        { backgroundColor: item.color },
                      ]}
                    >
                      <Text style={styles.categoryText}>{item.category}</Text>
                    </View>
                    <Text style={styles.suggestionDuration}>
                      {item.duration}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.row}
        >
          {ACTION_CARDS.map((item) => (
            <View key={item.id} style={styles.card}>
              <ImageBackground
                source={{ uri: item.image }}
                style={styles.bg}
                imageStyle={{ borderRadius: 18 }}
              >
                <View style={styles.overlay} />

                <View style={styles.content}>
                  <Text style={styles.title}>{item.title}</Text>

                  {/* Gradient Button */}
                  {item.buttonType === "gradient" && (
                    <LinearGradient
                      colors={["#F97316", "#a24b0c"]}
                      style={styles.gradientBtn}
                    >
                      <Text style={styles.gradientBtnText}>
                        {item.buttonText}
                      </Text>
                    </LinearGradient>
                  )}

        
                  {item.buttonType === "pill" && (
                    <TouchableOpacity style={styles.pillBtn}>
                      <View style={styles.iconCircle}>
                        <MaterialCommunityIcons
                          name="basketball"
                          size={24}
                          color="black"
                          style={{ marginRight: 6 }}
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

        <View style={{ height: 100 }} />
      </ScrollView>

      <TouchableOpacity style={styles.aiButtonContainer}>
        <LinearGradient
          colors={["#09855e", "#2f294d", "#63271f"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.aiButton}
        >
          <Ionicons
            name="flask-outline"
            size={20}
            color="#FFF"
            style={{ marginRight: 6 }}
          />
          <Text style={styles.aiButtonText}>Ask Ballogy AI</Text>
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
    paddingTop: 60,
    paddingBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  dateText: {
    fontSize: 14,
    color: "#9CA3AF",
    marginTop: 4,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    backgroundColor: "#1F2937",
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
    fontWeight: "bold",
  },
  ringsCard: {
    marginHorizontal: 20,
    backgroundColor: "#161617",
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    borderColor: "rgba(249, 229, 229, 0.08)",
    borderWidth: 2,
  },
  ringsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ringsIcon: {
    width: 180,
    height: 180,
  },
  svgRings: {
    transform: [{ rotate: "-90deg" }],
  },
  statsContainer: {
    flex: 1,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  statLabel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  statText: {
    color: "#D1D5DB",
    fontSize: 14,
  },
  statPercentage: {
    fontSize: 16,
    fontWeight: "bold",
  },
  viewMoreButton: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
    padding: 12,
  },
  viewMoreText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 14,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 16,
  },
  newButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8e9e9",
    paddingHorizontal: 12,

    borderRadius: 30,
    gap: 3,
    marginRight: 10,
    borderColor: "white",
    borderWidth: 2,
  },
  newButtonText: {
    color: "black",
    fontWeight: "800",
    fontSize: 18,
  },
 
  workoutCard: {
    backgroundColor: "#121111",
    borderWidth: 2,
    borderColor: "rgba(249, 229, 229, 0.08)",
    borderRadius: 20,
    padding: 13,
    marginRight: 12,

  },
  workoutName: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 8,
  },
  workoutDuration: {
    color: "#9CA3AF",
    fontSize: 12,
  },
  filtersScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  filterPill: {
    backgroundColor: "#121111",
    borderWidth: 2,
    borderColor: "rgba(249, 229, 229, 0.08)",
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 8,
  },
  filterPillActive: {
    backgroundColor: "#e06004",
    borderWidth: 2,
    borderColor: "#f17821",
  },
  filterText: {
    color: "#D1D5DB",
    fontWeight: "600",
    fontSize: 14,
  },
  filterTextActive: {
    color: "#FFF",
  },
  suggestionsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  suggestionCard: {
    width: 200,
    backgroundColor: "#1F2937",
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 12,
  },
  suggestionImage: {
    height: 180,
    backgroundColor: "#374151",
    justifyContent: "center",
    alignItems: "center",
  },
  suggestionEmoji: {
    fontSize: 60,
  },
  suggestionContent: {
    padding: 16,
  },
  suggestionName: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 12,
  },
  suggestionFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    color: "#FFF",
    fontSize: 11,
    fontWeight: "600",
  },
  suggestionDuration: {
    color: "#9CA3AF",
    fontSize: 12,
  },
  actionCardsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 24,
  },
  actionCardOrange: {
    flex: 1,

    borderRadius: 20,
    padding: 24,
    justifyContent: "space-between",
    minHeight: 160,
  },
  actionCardPurple: {
    flex: 1,
    backgroundColor: "#7C3AED",
    borderRadius: 20,
    padding: 24,
    justifyContent: "space-between",
    minHeight: 160,
  },
  actionCardTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F97316",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
    gap: 4,
  },
  actionButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 13,
  },
  actionButtonLight: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DDD6FE",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  actionButtonTextDark: {
    color: "#5B21B6",
    fontWeight: "bold",
    fontSize: 13,
  },
  aiButtonContainer: {
    position: "absolute",
    bottom: 40,
    right: 20,
    borderRadius: 30,
    overflow: "hidden",
  },

  aiButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 30,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },

  aiButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  row: {
    paddingHorizontal: 16,
  },
  card: {
    width: CARD_WIDTH,
    height: 160,
    borderRadius: 18,
    overflow: "hidden",
    marginRight: 16,
  },
  bg: {
    flex: 1,
    justifyContent: "space-between",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.40)",
  },
  content: {
    padding: 16,
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24,
  },

  gradientBtn: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 30,
    alignSelf: "flex-start",
  },
  gradientBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  pillBtn: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 30,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  iconCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "rgba(0,0,0,0.07)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },
  icon: { fontSize: 14 },
  pillText: {
    fontWeight: "700",
    fontSize: 14,
    color: "#000",
  },
});
