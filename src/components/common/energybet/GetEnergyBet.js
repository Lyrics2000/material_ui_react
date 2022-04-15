


class GetEnergyBet{

    constructor(energy_id){
        this.energy_id =  energy_id;
    }



    getResponse(){
        const data= fetch(`https://energybet.com/_api/v1/offer/matches/full/${this.energy_id}`, {
            "headers": {
              "accept": "application/json, text/plain, */*",
              "accept-language": "en,en;q=0.5",
              "cache-control": "no-cache",
              "content-language": "en",
              "content-type": "application/json",
              "device": "web",
              "pragma": "no-cache",
              "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Linux\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin"
            },
            "referrer": "https://energybet.com/en/pre-matches/football/italy/serie-a/as-roma-vs-genoa-cfc/--/5/563/775/11032456/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
          });
          const response = data.then((k)=>{
              return k.json().then((value)=>{
                  return value
              })
          })

          return response;
    }

    getMarket(market_id){
        const data = this.getResponse().then((k)=>{
            
            return k
        })

        const markets = data.then((l)=>{
          const  mark = l.markets;
          const empty_list =  []
          for (const key in mark) {
              if (mark[key].marketTypeId === market_id){
                //   console.log("makke",mark[key])
                  const market_selections = mark[key].selections
                  for (const ke in market_selections) {
                     
                      let dicti = {

                          event : mark[key].name,
                          line : mark[key].line,
                          section_id : market_selections[ke].id,
                          isSuspended : market_selections[ke].isSuspended,
                          name : market_selections[ke].name,
                          order: market_selections[ke].order,
                          rate : market_selections[ke].rate,

                      }
                      empty_list.push(dicti)
                      
                  }

              }
             
          }
          return empty_list
        })
        

        return markets;
    }

  

  
}


export default GetEnergyBet;


// const app = new GetEnergyBet(11032456)
// console.log(app.getMarket(58).then((o)=>{
//     console.log(o)
// }))

