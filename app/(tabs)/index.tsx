import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/hooks/components/HelloWave';
import ParallaxScrollView from '@/hooks/components/ParallaxScrollView';
import { ThemedText } from '@/hooks/components/ThemedText';
import { ThemedView } from '@/hooks/components/ThemedView';

export default function HomeScreen() {
  return (
    <View>
      <Text style={{ color: 'green'}} className='text-2xl'>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
