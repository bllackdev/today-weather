import React from 'react';
import { View, Image, ImageBackground } from 'react-native';

import backgroudSmall from '../../assets/img/backgroundSmall.png';
import location from '../../assets/img/location.png';

import styles from './styles';

interface PageHeaderProps {
  imageHeader: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ imageHeader }) => {
  return (
    <View style={styles.container}>
      <Image source={imageHeader} style={styles.image} />
    </View >
  );
}

export default PageHeader;