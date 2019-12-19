import axios from 'axios'

const fixerUrl = 'http://data.fixer.io/api/latest'
const access_key = '83639c2ed7adb9a64a91b615b56629b9'

export function getRates (base){
  return axios.get(fixerUrl, {
    params: {
      base,
      access_key
    }
  })
  .then(res => {
    const { data } = res,
      currencyList = []

    currencyList.push({
      name: data.base,
      value: 1
    })

    for(let rate in data.rates){
      currencyList.push({
        name: rate,
        value: data.rates[rate]
      })
    }
    return currencyList
  })
}

export function convertRates (base, target, amount){
  return axios.get(fixerUrl, {
    params: {
      access_key,
      base,
      symbols: target
    }
  })
}