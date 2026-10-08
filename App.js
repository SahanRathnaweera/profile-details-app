import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.profileContainer}>
        <Image
          
          source={require('./assets/new_profile.png')} 
          style={styles.profileImage}
        />
      </View>

      <View style={styles.divider} />

      {/* Profile Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Diluka</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Text style={styles.icon}>✉ </Text>
          <Text style={styles.value}>diluka.w@nsbm.ac.lk</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Text style={styles.icon}>★ </Text>
          <Text style={styles.value}>{points}</Text>
        </View>
      </View>

      {/* Floating Action Button (+ Button) */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => setPoints(points + 1)}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#000',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 25,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  divider: {
    height: 1,
    backgroundColor: '#dcdde1',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
  },
  value: {
    fontSize: 15,
    color: '#4b6584',
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 14,
    marginTop: 4,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 25,
    backgroundColor: '#000',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  fabIcon: {
    color: '#fff',
    fontSize: 28,
    lineHeight: 30,
  },
});