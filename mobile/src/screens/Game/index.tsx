import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { THEME } from '../../theme';
import { styles } from './styles';


export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState(null)

  const navigation = useNavigation();
  const route = useRoute<RouteProp<{game: GameCardProps}>>();
  const game = route.params;

  function handleGoBack () {
    navigation.goBack()
  }

  useEffect(() => {
    fetch(`http://192.168.15.16:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])
  
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={24}
            />
          </TouchableOpacity>

          <Image
            source={logo}
            style={styles.logo}
          />

          <View style={styles.right} />
        </View>

        <Image 
          source={{uri: game.url}}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!"/>

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => {}}
            />
          )}
          horizontal
          style={styles.containerList}
          showsHorizontalScrollIndicator
          contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent ]}
          ListEmptyComponent={
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          }
        />
        

      </SafeAreaView>
    </Background>
  );
}