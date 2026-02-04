import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../context/ThemeProvider';

import Logo from '../../components/Logo';
import WelcomeText from '../../components/WelcomeText';
import PlayButton from '../../components/PlayButton';
import ButtonPrimary from '../../components/ButtonPrimary';
import { spacing } from '../../theme/texts';
import { createStyles } from '../../styles/Starting/Intro';
import { AUDIOS } from '../../../assets/json/Audios';

export default function Intro({onStartGuide}) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const { nome, link, duracao } = AUDIOS.TUTORIAL;

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Escute o áudio de <Text style={styles.highlight}>2 min</Text> abaixo e descubra a{' '}
        <Text style={styles.highlight}>melhor maneira de fazer seu desejo.</Text> 
      </Text>
      
      <PlayButton 
        text= {nome}
        source= {link}
        duration={duracao}
      />
      
      <Text style={styles.guideText}>
        Veja o nosso guia em <Text style={styles.highlight}>3 passos</Text>, e entenda como funciona a plataforma.
      </Text>
      
      <ButtonPrimary
        title='Iniciar guia'
        onPress={onStartGuide}
      />
    </View>
  );
}