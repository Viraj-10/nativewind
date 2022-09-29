import { TextStyle, ViewStyle, ImageStyle } from "react-native";

export type StyleProperty =
  | keyof TextStyle
  | keyof ViewStyle
  | keyof ImageStyle
  /**
   * These are special SVG properties that we support
   */
  | "fill"
  | "stroke"
  | "strokeWidth";

const styleProperties: Record<StyleProperty, true> = {
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  aspectRatio: true,
  backfaceVisibility: true,
  backgroundColor: true,
  borderBottomColor: true,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderBottomWidth: true,
  borderColor: true,
  borderEndColor: true,
  borderEndWidth: true,
  borderLeftColor: true,
  borderLeftWidth: true,
  borderRadius: true,
  borderRightColor: true,
  borderRightWidth: true,
  borderStartColor: true,
  borderStartWidth: true,
  borderStyle: true,
  borderTopColor: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  borderTopWidth: true,
  borderWidth: true,
  bottom: true,
  color: true,
  direction: true,
  display: true,
  elevation: true,
  end: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontVariant: true,
  fontWeight: true,
  height: true,
  includeFontPadding: true,
  justifyContent: true,
  left: true,
  letterSpacing: true,
  lineHeight: true,
  margin: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,
  maxHeight: true,
  maxWidth: true,
  minHeight: true,
  minWidth: true,
  opacity: true,
  overflow: true,
  overlayColor: true,
  padding: true,
  paddingBottom: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  position: true,
  resizeMode: true,
  right: true,
  rotation: true,
  scaleX: true,
  scaleY: true,
  shadowColor: true,
  shadowOffset: true,
  shadowOpacity: true,
  shadowRadius: true,
  start: true,
  textAlign: true,
  textAlignVertical: true,
  textDecorationColor: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  textShadowColor: true,
  textShadowOffset: true,
  textShadowRadius: true,
  textTransform: true,
  testID: true,
  tintColor: true,
  top: true,
  transform: true,
  transformMatrix: true,
  translateX: true,
  translateY: true,
  width: true,
  writingDirection: true,
  zIndex: true,

  /* SVG Props */
  fill: true,
  stroke: true,
  strokeWidth: true,
};

export const validProperties = new Set(Object.keys(styleProperties));