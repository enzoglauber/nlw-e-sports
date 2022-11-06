import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { THEME } from '../../theme';
import { styles } from './styles';


export interface GameCardProps {
  id: string;
  url: string;
  title: string;
  _count: {
    ads: number
  }
}

interface Props extends TouchableOpacityProps{
  card: GameCardProps;
}

export function GameCard({card, ...props}:Props) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground style={styles.cover} source={{uri: card.url}}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer} >
          <Text style={styles.name}>
            {card.title}
          </Text>
          <Text style={styles.ads}>
            {card._count.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}