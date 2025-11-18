// import React from "react";
// import { Text, StyleSheet, TextStyle } from "react-native";
// import MaskedView from "@react-native-masked-view/masked-view";
// import { LinearGradient } from "expo-linear-gradient";

// interface Props {
//   children: string;
//   style?: TextStyle;
// }

// export default function GradientText({ children, style }: Props) {
//   return (
//     <MaskedView maskElement={<Text style={[style, styles.text]}>{children}</Text>}>
//       <LinearGradient
//         colors={["#FF1D1D", "#8F3300"]}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//       >
//         <Text style={[style, styles.transparent]}>{children}</Text>
//       </LinearGradient>
//     </MaskedView>
//   );
// }

// const styles = StyleSheet.create({
//   text: {
//     fontWeight: "bold",
//   },
//   transparent: {
//     opacity: 0,
//   },
// });
