import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import colors from '../../config/theme.json';
import {Participant} from '../../components/Participant';
import {styles} from './styles';

export const Home = () => {
  const [newParticipant, setNewParticipant] = useState('');
  const [participantsList, setParticipantsList] = useState<string[]>([]);

  const handleParticipantAdd = () => {
    const participantNameFormatted = newParticipant.trim();

    if (!participantNameFormatted) {
      return Alert.alert(
        'Nome inválido!',
        'Por favor, insira um nome de usuário válido.',
      );
    }

    if (participantsList.includes(newParticipant)) {
      return Alert.alert(
        'Usuário já existe!',
        'Este nome já está em uso, por favor insira um novo nome de usuário!',
      );
    }

    setParticipantsList(previousState => [
      ...previousState,
      participantNameFormatted,
    ]);
    setNewParticipant('');
  };

  const removeParticipantFromList = (currentParticipantName: string) => {
    const currentListWithoutRemovedParticipant = participantsList.filter(
      participantName => participantName !== currentParticipantName,
    );

    setParticipantsList(currentListWithoutRemovedParticipant);
  };

  const handleParticipantRemove = (participantName: string) => {
    Alert.alert(
      'Remover participante',
      `Deseja realmente remover o participante ${participantName}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Remover',
          onPress: () => removeParticipantFromList(participantName),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventData}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={newParticipant}
          onChangeText={setNewParticipant}
          placeholder="Nome do participante"
          placeholderTextColor={colors.lightGrayColor}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantsList}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View style={styles.containerList}>
            <Participant
              participantName={item}
              onPress={() => handleParticipantRemove(item)}
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não há usuários cadastrados na plataforma.
          </Text>
        )}
      />
    </View>
  );
};
