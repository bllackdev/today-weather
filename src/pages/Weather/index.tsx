import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import back from '../../assets/img/icons/back.png';
import logo from '../../assets/img/icons/logo-icon.png';
import update from '../../assets/img/icons/update.png'

import styles from './styles';

function Weather() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={back} />
        <Image source={logo} />
      </View>

      <View style={styles.body}>
        <Text style={styles.city}>CIDADE</Text>
        <View style={styles.weekDayHour}>
          <Text>Segunda-Feira</Text>
          <Text>18:00</Text>
        </View>

      </View>

      <View style={styles.weather}>
        <Text>23ºC</Text>
      </View>

      <View style={styles.variation}>
        <View style={styles.minimum}>
          <Text>Min</Text>
          <Text>11ºC</Text>
        </View>
        <View style={styles.maximum}>
          <Text>Máx</Text>
          <Text>31ºC</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Image source={update} />
        <Text>Atualizar</Text>
      </TouchableOpacity>
    </View >
  );
}

export default Weather;