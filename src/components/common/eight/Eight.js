import { EightCookie } from '../cookies/Cookie.js';
import axios from 'axios';

class GetGame{
    constructor(dicti,market_id){
        this.dicti =  dicti;
        this.market_id = market_id;
    }

    getResponse(){
        // console.log(this.dicti.eight_true_odds_link)
        
        var config = {
          method: 'get',
          url: `${this.dicti.eight_true_odds_link}`,
          headers: { 
            
            'cookie': EightCookie
          }
        };
        
     const response =    axios(config)
        .then(function (response) {
          return response.data
        })
        .catch(function (error) {
          return error;
        });

        return response;
        
    }


    getMarkets(){
        const markets = this.getResponse().then((resp)=>{
            
            if (resp !== false && typeof resp.event !== 'undefined' ){
                let rf = resp.event.markets.markets_selections;
                let mk = resp.event.markets.markets_details
                // console.log(rf)
                
                
                if (typeof mk !== 'undefined'){
                    const vv = mk[`${this.market_id}`];
                    // console.log(vv)
                    if (typeof vv !== 'undefined'){
                        const market_name =  mk[`${this.market_id}`].name;
                        console.log(market_name)
                
                const market_section = rf[`${this.market_id}`];
                // console.log(market_section)

                // console.log("market selection",market_section)
                var empty_list  = [] 
                
                for (var key in market_section) {
                    // console.log("market key : ",market_section[key])
                   
                    if ( market_section[key] !== null){
                        if (market_section[key].betable && market_section[key].suspended === false){
                            
                            const dicti = {
                                event_name : market_name,
                                section_name : market_section[key].name,
                                section_id : market_section[key].id,
                                section_price : market_section[key].decimal_price
    
                            }
                            // console.log(dicti)
                            
    
                            empty_list.push(dicti);
                            // console.log(dicti);
                       
                            
                        }else for (var ke in market_section[key]){
                            
                            if(ke !== null){
                                if (market_section[key][ke]  !== null){
                                    if (market_section[key][ke].betable && market_section[key][ke].suspended === false){
                            
                                        const dicti = {
                                            event_name : market_name,
                                            section_name : market_section[key][ke].name,
                                            section_id : market_section[key][ke].id,
                                            section_price : market_section[key][ke].decimal_price
                
                                        }
                                        // console.log(dicti)
                                        
                
                                        empty_list.push(dicti);
                                        // console.log(dicti);
                                   
                                    }
                                }
                                
                            }

                        }
                    }
                    
                }
                return empty_list;

                    }else{
                        return false;
                    }
                    
                }else{
                    return false;
                }


                
            }else{
                return false;
            }
            
        })

        return markets;
    }
   

    
}


// const dicti =  {
//     "eight_home_team": "Manchester City",
//     "eight_away_team": "Fulham",
//     "one_home_team": "Manchester City",
//     "one_away_team": "Fulham",
//     "one_start_time": "2022-02-05 18:00:00",
//     "eight_start_time": "2022-02-05 18:00:00",
//     "sport_name": "Football",
//     "event_link": "https://www.888sport.com/football/england/england-fa-cup/manchester-city-v-fulham-e-1571402",
//     "eight_true_odds_link": "https://spectate-web.888sport.com/spectate/sportsbook/getEventData/football/england/england-fa-cup/manchester-city-v-fulham/1571402",
//     "eight_league": "England FA Cup",
//     "eight_country": "England",
//     "eight_id": 1571402,
//     "one_league": "England. FA Cup",
//     "one_country": "England",
//     "one_event_id": 351188673,
//     "onexbet_link": "https://sg.1xbet.com/line/Football/108319-England-FA-Cup/351188673-Manchester-City-Fulham"
// }

// const mm = JSON.parse(JSON.stringify(dicti))

// const app = new GetGame(mm,1323275)

// const data = app.getMarkets().then((k)=>{
//     console.log(k)
    
// })


export default GetGame;



