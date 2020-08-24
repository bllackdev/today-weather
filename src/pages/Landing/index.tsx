import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

import searchIcon from '../../assets/img/icons/search.png';
import location from '../../assets/img/location.png';


import styles from './styles';


function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToWeatherPage() {
    navigate('Weather');
  }

  return (
    <View style={styles.container}>
      <View>
        <PageHeader imageHeader={location} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Informe a cidade para {'\n'}ver a previsão</Text>
        <TextInput
          style={styles.input}
          // value={city}
          placeholder="Digite a cidade"
          placeholderTextColor="#c1bccc"
        />
      </View>

      <View style={styles.searchButton}>
        <TouchableOpacity
          onPress={handleNavigateToWeatherPage}
          style={styles.button}
        >
          <Image source={searchIcon} style={styles.iconButton} />
          <Text style={styles.textButton}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Landing;