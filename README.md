# CES Hero Chart

## Usage
To use the widget, you'll need to include a few dependencies and the widget library itself. It's recommended that the parent element to the visualization is 800x600 pixels at least.

```html
<script src="https://d3js.org/d3.v5.min.js"></script>
<script src="https://unpkg.com/topojson-client@3"></script>
<script src="https://devinhunt.github.io/ces-hero-chart/index.js"></script>
<script>
  // Initialize the map on an empty div named #hero-chart
  const heroMap = window.CESHero(document.getElementById('hero-chart'))
</script>
```