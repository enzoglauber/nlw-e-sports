import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { THEME } from '../../theme';
import { styles } from './styles';


export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps{
  card: GameCardProps;
}

export function GameCard({card, ...props}:Props) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <ImageBackground style={styles.cover} source={card.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer} >
          <Text style={styles.name}>
            {card.name}
          </Text>
          <Text style={styles.ads}>
            {card.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}