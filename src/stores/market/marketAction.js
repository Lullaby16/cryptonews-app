import axios from "axios"

export const GET_COIN_MARKET_BEGIN = "GET_COIN_MARKET_BEGIN"
export const GET_COIN_MARKET_SUCCESS = "GET_COIN_MARKET_SUCCESS"
export const GET_COIN_MARKET_FAILURE = "GET_COIN_MARKET_FAILURE"

export const getCoinMarketBegin = () => ({
    type: GET_COIN_MARKET_BEGIN
})

export const getCoinMarketSuccess = (coins) => ({
    type: GET_COIN_MARKET_SUCCESS,
    payload: { coins }
})

export const getCoinMarketFailure = (error) => ({
    type: GET_COIN_MARKET_FAILURE,
    payload: { error }
})

export function getCoinMarket( currency = "usd", orderBy = "market_cap_desc",
sparkline = true, priceChangePerc = "7d", perPage = 10, page = 1) {

    return dispatch => {
        dispatch(getCoinMarketBegin())

        let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}`
    
        return axios({
            url: apiUrl,
            method: 'GET',
            header: {
                Accept: "application/json"
            }
        }).then((response) => {
            console.log("Get Coin Market")
            console.log(response)
            if(response.state == 200) {
                dispatch(getCoinMarketSuccess(response.data))
            } else {
                dispatch(getCoinMarketFailure(response.data))
            }
        }).catch((error) => {
            dispatch(getCoinMarketFailure(error))
        })
    }
}