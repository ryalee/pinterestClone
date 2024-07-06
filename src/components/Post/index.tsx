import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import { PostProps } from "./post";
import styles from './style';

export function Post({ title, image }: PostProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image}/>

      <View>
        <Text style={styles.title}>{title}</Text>
        <Feather name="more-horizontal" size={16} color={theme.colors.white}/>
      </View>
    </View>
  )
}