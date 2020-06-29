import { fips } from './fips'

export const scoreToTrendMap = {
  'Red': 'Trending poorly',
  'Yellow': 'Making progress',
  'Green': 'Trending better',
}

export const sheetsCsvTemplate = docId => `https://docs.google.com/spreadsheets/d/${docId}/export?format=csv`

export const groupTrend = (data, prefix, startingIndex = 0, minIntegerDigits = 1, reverse = true) => {
  let index = startingIndex
  const getKey = i => `${prefix}${i.toLocaleString('en-US', {
    minimumIntegerDigits: minIntegerDigits, 
    useGrouping: false
  })}`
  const trend = []
  while(getKey(index) in data) {
    trend.push(data[getKey(index)])
    index ++
  }

  if(reverse) {
    trend.reverse()
  }

  return trend
}

export const idToStateName = id => fips[id].name
export const idToStateAbbr = id => fips[id].abbreviation

export const idToStateData = (id, data) => data.filter(state => state.STATE.toLowerCase() == idToStateName(id).toLowerCase())[0]