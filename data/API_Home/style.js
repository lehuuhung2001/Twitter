import { StyleSheet,Dimensions} from 'react-native'
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  main: {
    margin: width * 0.07,
    right: 3,
    bottom: 25,
  },

  image: {
    width: 280,
    height: 280,
    resizeMode: "contain",
    borderRadius: 20,
  },
  avatar: {
    height: height / 16,
    width: width / 7,
    borderRadius: 45,
    top: 9,
    left: 15,
  },
});

export default styles