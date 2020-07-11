export const injectStyle = styleString => {
  const styleEl = document.createElement('style')
  styleEl.textContent = styleString
  document.head.append(styleEl)
}



export const DEEP_RED = `#882230`
export const RED = `#BD3427`
export const YELLOW = `#FAC441`
export const GREEN = `#236552`

export const heroStyle = `

.ces-grid {
  display: flex;
}

.ces-col {
  flex: 1 0;
}

.ces-hero-tooltip {
  display: none;
  position: absolute;
  z-index: 999;
  transform: translate(-50%, 10px);
  backface-visibility: hidden;

  left: 0;
  top: 0;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 11px;
}

.ces-hero-tooltip.ces-active {
  display: block;
}

.Green { color: ${GREEN}; }
.Yellow { color: ${YELLOW}; }
.Red { color: ${RED}; }
.Bruised-Red { color: ${DEEP_RED}; }

.Green-bg { background-color: ${GREEN}; }
.Yellow-bg { background-color: ${YELLOW}; }
.Red-bg { background-color: ${RED}; }
.Bruised-Red-bg { background-color: ${DEEP_RED}; }

.ces-tooltip-content {
  width: 360px;
  border-radius: 4px;
  color: white;
  padding: 8px 10px;
  box-sizing: border-box;
  border: 2px solid #eee;
}

.ces-tooltip-content.Yellow-bg {
  color: #222;
}

.ces-hero-tooltip h1 {
  font-size: 20px;
  line-height: 20px;
  margin: 5px 0 9px 0;
}

.ces-trend-label {
  display: block;
  line-height: 15px;
  margin-top: 5px;
}

.ces-tooltip-header-title {
  color: white;
}

.ces-tooltip-header-trend {
  flex: 1 0;
}

#ces-tooltip-spark-trend > svg {
  overflow: visible;
}

.ces-trend-spark-label {
  font-size: 10px;
}

.Green-bg .ces-spark-line, .Red-bg .ces-spark-line, .Bruised-Red-bg .ces-spark-line {
  stroke: white;
}

.Green-bg .ces-trend-spark-label, .Red-bg .ces-trend-spark-label, .Bruised-Red-bg .ces-trend-spark-label {
  fill: white;
}

.Yellow-bg .ces-spark-line {
  stroke: black;
}

.Yellow-bg .ces-trend-spark-label {
  fill: black;
}
`