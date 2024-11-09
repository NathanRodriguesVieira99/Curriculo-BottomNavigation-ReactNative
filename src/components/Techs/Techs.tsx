import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Techs() {
  return (
    <>
      <Text style={s.linguagens}>Linguagens e Frameworks</Text>
      <View style={s.techsContainer}>
        <View style={s.iconContainer}>
          <Ionicons name="logo-html5" size={50} color="#e44d26" />
          <Text style={s.iconText}>HTML</Text>
        </View>
        <View style={s.iconContainer}>
          <Ionicons name="logo-css3" size={50} color="#1572b6" />
          <Text style={s.iconText}>CSS</Text>
        </View>
        <View style={s.iconContainer}>
          <Ionicons name="logo-javascript" size={50} color="#f7df1e" />
          <Text style={s.iconText}>JavaScript</Text>
        </View>
        <View style={s.iconContainer}>
          <MaterialCommunityIcons name="language-typescript" size={50} color="#3178C6" />
          <Text style={s.iconText}>TypeScript</Text>
        </View>
        <View style={s.iconContainer}>
          <Ionicons name="logo-react" size={50} color="#61DBFB" />
          <Text style={s.iconText}>ReactJs</Text>
        </View>
        <View style={s.iconContainer}>
          <MaterialCommunityIcons name="tailwind" size={50} color="#38BDF8" />
          <Text style={s.iconText}>Tailwind</Text>
        </View>
        <View style={s.iconContainer}>
          <Ionicons name="logo-sass" size={50} color="#CC6699" />
          <Text style={s.iconText}>Sass</Text>
        </View>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  techsContainer: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 50,
  },
  linguagens: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    top: 33
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  iconText: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});
