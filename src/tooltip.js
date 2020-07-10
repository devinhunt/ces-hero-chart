import { scoreToTrendMap, scoreToSafeString } from './data'

export const setupTooltip = (parent) => {
  const tooltip = d3.select(parent)
    .append('div')
    .classed('ces-hero-tooltip', true)
    .classed('ces-active', false)
  
  return tooltip
}

export const tooltipTemplate = context => {
  const gateScore = context['NEW GATING SCORE']
  const gateString = scoreToSafeString[gateScore]
  
  return `
    <div class="ces-tooltip-content ${gateString}-bg">
      <div class="ces-grid">
        <div class="ces-col">
          <span class="ces-trend-label">${scoreToTrendMap[gateScore]}</span>
          <h1>${context.STATE}</h1>        
        </div>
        <div class="ces-col">
          <span class="ces-trend-label">New cases per million</span>
          <h1>${context['NEW CASES PER MILLION PER DAY']}</h1>
        </div>
      </div>
      <div class="ces-grid">
        <div class="ces-col">
          <span class="ces-trend-label">Last 14 days COVID+</span>
          <div id="ces-spark-covid-plus"></div>          
        </div>
        <div class="ces-col">
          <span class="ces-trend-label">Last 14 days positivity</span>
          <div id="ces-spark-positivity"></div>
        </div>
      </div>
    </div>
  `
}
