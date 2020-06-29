export default class Spark {

  constructor(metrics, percision = 0, suffix = '') {
    this.metrics = metrics
    this.percision = percision
    this.suffix = suffix
    this.initialize()
  }

  initialize() {
    this.svg = d3.create('svg')
      .attr('width', this.metrics.width)
      .attr('height', this.metrics.height)
    
    this.path = this.svg.append('path')
      .classed('ces-spark-line', true)
      .attr('fill', 'none')
      .attr('stroke', 'white')
      .attr('stroke-width', 1.5)

    this.leftLabel = this.svg.append('g')
    
    this.leftLabel.append('text')
      .classed('ces-trend-spark-label', true)
      .text('0')
      .attr('fill', 'white')
      .attr('text-anchor', 'middle')
      .attr('y', -5)

    this.rightLabel = this.svg.append('g')
    
    this.rightLabel.append('text')
      .classed('ces-trend-spark-label', true)
      .text('0')
      .attr('fill', 'white')
      .attr('text-anchor', 'middle')
      .attr('y', -5)
  }

  get node() {
    return this.svg.node()
  }

  update(data) {
    const x = d3.scaleLinear()
      .domain([0, data.length])
      .range([this.metrics.left, this.metrics.width - this.metrics.right])

    const y = d3.scaleLinear()
      .domain(d3.extent(data))
      .range([this.metrics.height - this.metrics.bottom, this.metrics.top])
    
    const line = d3.line()
      .x( (d, i) => x(i) )
      .y( d => y(d) )
    
    this.path
      .datum(data)
      .attr('d', line)

    this.leftLabel.attr('transform', `translate(${x(0)}, ${y(data[0])})`)
    this.leftLabel.select('text').text(this.formatDatum(data[0]))

    this.rightLabel.attr('transform', `translate(${x(data.length - 1)}, ${y(data[data.length - 1])})`)
    this.rightLabel.select('text').text(this.formatDatum(data[data.length - 1]))
  }

  formatDatum(datum) {
    return `${datum}${this.suffix}`
  }

}