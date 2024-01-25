import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export type ParticipantProps = {
  participantName: string;
  onPress: () => void;
};

export const Participant = ({participantName, onPress}: ParticipantProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{participantName}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
};
