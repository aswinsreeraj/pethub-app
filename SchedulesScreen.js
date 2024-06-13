import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SchedulesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feeding Schedule</Text>
      
      <Section title="Current">
        <ScheduleItem name="Smokey" details="Dog Food, 2 scoops" time="1:00 PM" />
        <ScheduleItem name="Nugget" details="Cat Food, 1 scoop" time="1:30 PM" />
      </Section>
      
      <Section title="Upcoming">
        <ScheduleItem name="Minty" details="Cat Food, 1 scoop" time="4:00 PM" />
        <ScheduleItem name="Nugget" details="Cat Food, 1 scoop" time="4:30 PM" />
      </Section>
      
      <View style={styles.footer}>
        <FooterButton label="Home" />
        <FooterButton label="Schedules" />
        <FooterButton label="Settings" />
      </View>
    </View>
  );
};

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const ScheduleItem = ({ name, details, time }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.itemName}>{name}</Text>
      <Text style={styles.itemDetails}>{details}</Text>
    </View>
    <Text style={styles.itemTime}>{time}</Text>
  </View>
);

const FooterButton = ({ label }) => (
  <View style={styles.footerButton}>
    <Text style={styles.footerButtonText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemName: {
    color: '#fff',
    fontSize: 16,
  },
  itemDetails: {
    color: '#aaa',
    fontSize: 14,
  },
  itemTime: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#333',
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    color: '#fff',
  },
});

export default SchedulesScreen;
