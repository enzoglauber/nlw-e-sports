import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logo from '../../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';


export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])
  const route = useRoute<RouteProp<{game: GameCardProps}>>();
  const game = route.params;

  const navigation = useNavigation()

  useEffect(() => {
    fetch('http://192.168.15.16:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  const handleOpenGame = (game: GameCardProps) => () => {
    navigation.navigate('game', game);
  }

  return (
    <Background>

      <SafeAreaView style={styles.container}>
        <Image 
          source={logo}
          style={styles.logo}
          defaultSource={logo}
        />
        
        <Heading 
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...'
        />

        <FlatList
          horizontal
          contentContainerStyle={styles.list}
          showsHorizontalScrollIndicator={false}
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard
              card={item}
              onPress={handleOpenGame(item)}
            />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}