import 'regenerator-runtime/runtime'
import { sheetsCsvTemplate, groupTrend, idToStateData } from './src/data'
import { injectStyle, heroStyle } from './src/hero-style'
import { setupTooltip, tooltipTemplate } from './src/tooltip'
import Map from './src/map'
import Spark from './src/spark'

const SHEET_ID = `1ZhwP0GZTz50myibSaWsMXOVQKx9DQaJO4rN1i58Rrjc`

let tooltip = null
let tooltipData = null
let mapX = 0
let mapY = 0

const setupHostElement = (parent) => {
  d3.select(parent)
    .style('position', 'relative')
}

window.CESHero = async (hostElement) => {
  
  injectStyle(heroStyle)
  setupHostElement(hostElement)
  
  tooltip = setupTooltip(hostElement)

  // load data
  const usmap = await d3.json('https://unpkg.com/us-atlas@1/us/10m.json')
  const data = await d3.csv(sheetsCsvTemplate(SHEET_ID))

  data.forEach( datum => {
    datum['TREND_CASES'] = groupTrend(datum, 'CASES-T-').map(p => +p)
    //hack for 14 days
    const tcLength = datum['TREND_CASES'].length
    datum['TREND_CASES'] = datum['TREND_CASES'].slice(tcLength - 14, tcLength)
    datum['TREND_TESTS'] = groupTrend(datum, 'TESTS-T-').map(p => +p)
    datum['TREND_DEATHS'] = groupTrend(datum, 'DEATHS-', 0, 2).map(p => +p)

    datum['TREND_POSITIVITY'] = groupTrend(datum, 'POSITIVITY-', 0, 2).map(p => {
      const num = p.substring(0, p.length - 1)
      return +num
    })

  })
  
  console.log(data)

  // map chart
  const map = new Map(usmap, data)
  hostElement.append(map.node)
  map.statePaths
    .on('click', onStateClick)
    .on('mouseenter', onStateEnter)
  map.mapG
    .on('mouseleave', onStateLeave)
  
  // sparks
  const sparkMetrics = { width: 140, height: 50, top: 20, right: 15, bottom: 5, left: 15 }
  const covidSpark = new Spark(sparkMetrics)
  const positivitySpark = new Spark(sparkMetrics, 2, '%')


  function onStateClick(d) {
    console.log(d.id)
  }
  
  function onStateEnter(d) {
    tooltipData = idToStateData(d.id, data)
    
    tooltip.html(tooltipTemplate(tooltipData))
    
    document.querySelector('#ces-spark-covid-plus')
      .append(covidSpark.node)
    
    covidSpark.update(tooltipData['TREND_CASES'])

    document.querySelector('#ces-spark-positivity')
      .append(positivitySpark.node)
    
    positivitySpark.update(tooltipData['TREND_POSITIVITY'])

    tooltip.classed('ces-active', true)
  }
  
  function onStateLeave(d) {
    tooltip.classed('ces-active', false)
  }
  
  function onMapMove(event) {
    const hostRect = hostElement.getBoundingClientRect()
    mapX = event.clientX - hostRect.left - 150
    mapY = event.clientY - hostRect.top + 10

    mapX = Math.min(hostRect.width - 300, Math.max(0, mapX))
  
    tooltip.style('transform', `translate(${mapX}px, ${mapY}px)`)
  }

  // move event
  window.addEventListener('mousemove', onMapMove)
}
