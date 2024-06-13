import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
      <Section title="Preferences">
        <SettingsItem label="Temperature" value="Fahrenheit" />
        <SettingsItem label="Notification" value="On" />
      </Section>
      
      <Section title="Notifications">
        <SettingsItem label="Reminders" value="On" />
        <SettingsItem label="Updates" value="On" />
      </Section>
      
      <View style={styles.footer}>
        <FooterButton label="Home" onPress={() => navigation.navigate('Home')} />
        <FooterButton label="Schedules" onPress={() => navigation.navigate('Schedules')} />
        <FooterButton label="Settings" onPress={() => navigation.navigate('Settings')} />
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

const SettingsItem = ({ label, value }) => (
  <View style={styles.item}>
    <Text style={styles.itemLabel}>{label}</Text>
    <Text style={styles.itemValue}>{value}</Text>
  </View>
);

const FooterButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.footerButton} onPress={onPress}>
    <Text style={styles.footerButtonText}>{label}</Text>
  </TouchableOpacity>
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
  itemLabel: {
    color: '#fff',
    fontSize: 16,
  },
  itemValue: {
    color: '#aaa',
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

export default SettingsScreen;
