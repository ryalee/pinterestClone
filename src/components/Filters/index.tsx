import { FlatList } from 'react-native';
import { styles } from './styles';

import { FilterProps } from './filters';
import { FILTERS } from '@/utils/filters';
import { Filter } from '@/components/Filter';

export function Filters({ filters, filter, onChange}: FilterProps) {
  return (
    <FlatList 
      data={FILTERS} 
      keyExtractor={ (item) => item }
      renderItem={({ item }) => (
        <Filter 
          filter={item} 
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal 
      style={styles.list}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  ) 
}