import { View } from 'react-native';

import styles from './style';
import { Post } from '../Post';

export function Posts({posts}: PostsProps) {
  return (
    <View>
      <Post id={posts[0].id} title={posts[0].title} image={posts[0].image}/>
    </View>
  )
}