
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Move', 'Train', 'Recover'];
  const completedWorkouts = [
    { name: 'Tennis Wall Pr...', duration: '45 min' },
    { name: 'Back & Biceps', duration: '1h 30m' },
  ];

  const suggestions = [
    {
      name: 'Weak Hand Finishing Drill',
      category: 'Move',
      duration: '25 min',
      emoji: '🏋️',
      color: '#F97316',
    },
    {
      name: '10 minute Post-workout Stretching',
      category: 'Recover',
      duration: '10 min',
      emoji: '🧘',
      color: '#A855F7',
    },
    {
      name: 'Jump Rope HIIT',
      category: 'Train',
      duration: '20 min',
      emoji: '🪢',
      color: '#FBBF24',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
                <Text style={styles.badgeText}>3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.ringsCard}>
          <View style={styles.ringsContainer}>
            <View style={styles.ringsWrapper}>
              
           
            </View>

            <View style={styles.statsContainer}>
              <View style={styles.statRow}>
                <View style={styles.statLabel}>
                  <View style={[styles.dot, { backgroundColor: '#EC4899' }]} />
                  <Text style={styles.statText}>Move</Text>
                </View>
                <Text style={[styles.statPercentage, { color: '#EC4899' }]}>68%</Text>
              </View>

              <View style={styles.statRow}>
                <View style={styles.statLabel}>
                  <View style={[styles.dot, { backgroundColor: '#FBBF24' }]} />
                  <Text style={styles.statText}>Train</Text>
                </View>
                <Text style={[styles.statPercentage, { color: '#FBBF24' }]}>65%</Text>
              </View>

              <View style={styles.statRow}>
                <View style={styles.statLabel}>
                  <View style={[styles.dot, { backgroundColor: '#A855F7' }]} />
                  <Text style={styles.statText}>Recover</Text>
                </View>
                <Text style={[styles.statPercentage, { color: '#A855F7' }]}>32%</Text>
              </View>

              <TouchableOpacity style={styles.viewMoreButton}>
                <Text style={styles.viewMoreText}>View More</Text>
                <Ionicons name="chevron-forward" size={16} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Completed Workouts</Text>
            <TouchableOpacity style={styles.newButton}>
              <Ionicons name="add" size={18} color="#FFF" />
              <Text style={styles.newButtonText}>New</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScroll}
          >
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
                  <Text style={styles.suggestionEmoji}>{item.emoji}</Text>
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
                    <Text style={styles.suggestionDuration}>{item.duration}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.actionCardsContainer}>
          <TouchableOpacity style={styles.actionCardOrange}>
            <Text style={styles.actionCardTitle}>Start a Custom{'\n'}Workout</Text>
            <View style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Start Now</Text>
              <Ionicons name="chevron-forward" size={16} color="#FFF" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionCardPurple}>
            <Text style={styles.actionCardTitle}>Take the{'\n'}BSA Test</Text>
            <View style={styles.actionButtonLight}>
              <Text style={styles.actionButtonTextDark}>🧪 Test Now</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <TouchableOpacity style={styles.aiButton}>
        <Text style={styles.aiEmoji}>🤖</Text>
        <Text style={styles.aiButtonText}>Ask Ballogy AI</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  dateText: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 4,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    backgroundColor: '#1F2937',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 20,
    height: 20,
    backgroundColor: '#F97316',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  ringsCard: {
    marginHorizontal: 20,
    backgroundColor: '#1F2937',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
  },
  ringsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  ringsWrapper: {
    width: 130,
    height: 130,
  },
  svgRings: {
    transform: [{ rotate: '-90deg' }],
  },
  statsContainer: {
    flex: 1,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  statText: {
    color: '#D1D5DB',
    fontSize: 14,
  },
  statPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  viewMoreText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
  },
  newButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 4,
  },
  newButtonText: {
    color: '#FFF',
    fontWeight: '600',
  },
  horizontalScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  workoutCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    minWidth: 160,
  },
  workoutName: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 8,
  },
  workoutDuration: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  filtersScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  filterPill: {
    backgroundColor: '#1F2937',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 8,
  },
  filterPillActive: {
    backgroundColor: '#F97316',
  },
  filterText: {
    color: '#D1D5DB',
    fontWeight: '600',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#FFF',
  },
  suggestionsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  suggestionCard: {
    width: 200,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 12,
  },
  suggestionImage: {
    height: 180,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
  },
  suggestionEmoji: {
    fontSize: 60,
  },
  suggestionContent: {
    padding: 16,
  },
  suggestionName: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 12,
  },
  suggestionFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: '600',
  },
  suggestionDuration: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  actionCardsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 24,
  },
  actionCardOrange: {
    flex: 1,
    backgroundColor: '#EA580C',
    borderRadius: 20,
    padding: 24,
    justifyContent: 'space-between',
    minHeight: 160,
  },
  actionCardPurple: {
    flex: 1,
    backgroundColor: '#7C3AED',
    borderRadius: 20,
    padding: 24,
    justifyContent: 'space-between',
    minHeight: 160,
  },
  actionCardTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F97316',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 4,
  },
  actionButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  actionButtonLight: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDD6FE',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  actionButtonTextDark: {
    color: '#5B21B6',
    fontWeight: 'bold',
    fontSize: 13,
  },
  aiButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7C3AED',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    gap: 8,
  },
  aiEmoji: {
    fontSize: 24,
  },
  aiButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});


