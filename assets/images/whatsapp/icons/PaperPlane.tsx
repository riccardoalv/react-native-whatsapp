import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function PaperPlaneIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" height={24} width={24} x="0px" y="0px" {...props}>
      <Path
        fill="currentColor"
        d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
      />
    </Svg>
  )
}

export default PaperPlaneIcon

