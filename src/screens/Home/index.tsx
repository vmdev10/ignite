import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity} from 'react-native';

import colors from '../../config/theme.json';
import {Participant} from '../../components/Participant';
import {styles} from './styles';

export const Home = () => {
  const [newParticipant, setNewParticipant] = useState('');
  const [participantsList, setParticipantsList] = useState<string[]>([]);

  const handleParticipantAdd = () => {
    setParticipantsList(previousState => [...previousState, newParticipant]);
    setNewParticipant('');
  };

  const handleParticipantRemove = (currentParticipant: string) => {
    const removedCurrentParticipant = participantsList.filter(
      participant => participant !== currentParticipant,
    );
    setParticipantsList(removedCurrentParticipant);
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

      {participantsList.map(participant => (
        <View style={styles.containerList} key={participant}>
          <Participant
            participantName={participant}
            onPress={() => handleParticipantRemove(participant)}
          />
        </View>
      ))}
    </View>
  );
};
