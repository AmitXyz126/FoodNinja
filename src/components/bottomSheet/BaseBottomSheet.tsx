import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useMemo,
  useEffect,
} from "react";
import { Text, StyleSheet, Pressable, Platform } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Portal } from "@gorhom/portal";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
// import { Colors } from "@/theme/colors";

export type BaseBottomSheetRef = {
  present: () => void;
  dismiss: () => void;
  expand: () => void;
  collapse: () => void;
  snapToIndex: (index: number) => void;
  
};

type Props = {
  title?: string;
  children?: React.ReactNode;
  snapPoints?: (string | number)[];
  initialIndex?: number;
};

const  BaseBottomSheet = forwardRef<BaseBottomSheetRef, Props>(
  function ProductAddOnBottomSheet(
    { title, children, snapPoints, initialIndex = -1 },
    ref
  ) {
    const bottomSheetRef = useRef<BottomSheetMethods>(null);
    const [isOpen, setIsOpen] = useState(initialIndex >= 0);
    const opacity = useSharedValue(initialIndex >= 0 ? 1 : 0);

    const memoizedSnapPoints = useMemo(() => snapPoints || [], [snapPoints]);

    useImperativeHandle(ref, () => ({
      present: () => {
        setIsOpen(true);
        bottomSheetRef.current?.expand();
      },
      dismiss: () => {
        bottomSheetRef.current?.close();
        setIsOpen(false);
      },
      expand: () => {
        setIsOpen(true);
        bottomSheetRef.current?.expand();
      },
      collapse: () => {
        bottomSheetRef.current?.collapse();
      },
      snapToIndex: (index: number) => {
        setIsOpen(true);
        bottomSheetRef.current?.snapToIndex(index);
      },
    }));

    const handleSheetChange = (index: number) => {
      const open = index >= 0;
      setIsOpen(open);
      opacity.value = withTiming(open ? 1 : 0, { duration: 250 });
    };

    const animatedOverlayStyle = useAnimatedStyle(() => ({
      opacity: opacity.value,
    }));

    useEffect(() => {
      opacity.value = withTiming(isOpen ? 1 : 0, { duration: 250 });
    }, [isOpen, opacity]);

    return (
      <Portal>
        <Animated.View
          pointerEvents={isOpen ? "auto" : "none"}
          style={[styles.overlay, animatedOverlayStyle]}
        >
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => {
              bottomSheetRef.current?.close();
              setIsOpen(false);
            }}
          />
        </Animated.View>

        <BottomSheet
          ref={bottomSheetRef}
          index={initialIndex} // Fix invalid index
          snapPoints={
            memoizedSnapPoints.length > 0 ? memoizedSnapPoints : undefined
          }
          enableDynamicSizing={memoizedSnapPoints.length === 0}
          enablePanDownToClose
          onChange={handleSheetChange}
          backgroundStyle={styles.sheetBackground}
          keyboardBehavior={Platform.OS === "ios" ? "interactive" : "extend"}
          keyboardBlurBehavior="restore"
          android_keyboardInputMode="adjustResize"
        >
          <BottomSheetView style={styles.contentContainer}>
            {title && <Text style={styles.title}>{title}</Text>}
            {children}
          </BottomSheetView>
        </BottomSheet>
      </Portal>
    );
  }
);

export default BaseBottomSheet;

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  contentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    // color: Colors.gray,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
     },
});
