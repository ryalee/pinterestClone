import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '@/theme';

import { Posts } from '@/components/Posts';
import { Filters } from '@/components/Filters';

import { FILTERS } from '@/utils/filters';
import { POSTS } from '@/utils/posts';

export default function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);
  return (
    <View style={styles.container}>
      <Filters filters={FILTERS} filter={filter} onChange={setFilter}/>

      <Posts posts={POSTS}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    padding: 12,
    paddingTop: 60,
  },

  text: {
    fontSize: 22,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
  },
});