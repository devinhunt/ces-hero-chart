import { idToStateData } from './data'
import { GREEN, YELLOW, RED, DEEP_RED } from './hero-style'

export default class Map {

  WIDTH = 1000
  HEIGHT = 700

  SCORE_TO_COLOR = {
    'Bruised Red': DEEP_RED,
    'Red': RED,
    'Yellow': YELLOW,
    'Green': GREEN,
  }

  constructor(mapData, cesData, listeners) {
    this.mapData = mapData
    this.cesData = cesData

    this.initialize()
  }

  get node() {
    return this.svg.node()
  }

  initialize() {
    const idToTrendColor = id => {
      const state = idToStateData(id, this.cesData)
      return this.SCORE_TO_COLOR[state['NEW GATING SCORE']]
    }

    this.svg = d3.create('svg')
      .attr('viewBox', [0, 0, this.WIDTH, this.HEIGHT])
      .attr('preserveAspectRation', 'xMidYMid meet')

    this.mapG = this.svg.append('g')

    const geoPath = d3.geoPath()
    const states = topojson.feature(this.mapData, this.mapData.objects.states)

    // append centroid data
    states.features.forEach( state => {
      const [x, y] = geoPath.centroid(state)
      state.properties = { ...state.properties, x, y }
    })

    // generate state polygons
    this.statePaths = this.mapG.append('g')
      .selectAll('path')
      .data(states.features)
      .join('path')
        .attr('fill', d => idToTrendColor(d.id))
        .attr('d', geoPath)
        // .on('click', onStateClick)
        // .on('mouseenter', onStateEnter)
        // .on('mouseleave', onStateLeave)

    // state outlines
    this.mapG.append('path')
      .attr('fill', 'none')
      .attr('stroke', 'white')
      .attr('stroke-linejoin', 'round')
      .attr('d', geoPath(topojson.mesh(this.mapData, this.mapData.objects.states, (a, b) => a !== b)))
    }
}