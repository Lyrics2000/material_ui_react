
import axios from "axios"
import {ApolloClient,InMemoryCache,gql} from "@apollo/client";


export const getSSE = (payload) =>{
    const res = axios.post('http://localhost:3001/fact', payload)
      .then(function (response) {
        return response.data
      })
      .catch(function (error) {
        return {"success":"false"}
      });

      return res;

}


export const eightEnergybetQuery  =(combinationId,Page,CombinationType) =>{

    return (
        gql`
  query {
    allCodes(combinationId: ${combinationId}, page: ${Page}, combinationType: ${CombinationType}) {
      page
      pages
      hasNext
      hasPrev
      results {
        id
        combinationType
        combinationId
        eventName
        name1Code
        name2Code
        bookmaker1
        bookmaker2
        energyEightCombination {
          id
          energybetHomeTeam
          energybetAwayTeam
          energybetLeague
          energybetCountry
          energybetStartime
          energybetUrl
          energybetSportName
          energybetEventId
          eightHomeTeam
          eightAwayTeam
          eightStartTime
          eightSportName
          eightEventLink
          eightTrueOddsLink
          eightLeague
          eightCountry
          eightId
        }
      }
    }
  }
  `
    )

}

