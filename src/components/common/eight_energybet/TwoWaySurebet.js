// const CalculateStake = require("../placebets/CalculateStake.js");
import SendMessage from "../SendTelegramMessage";

class SurebetTwoWayEightEnergybet{
    constructor(event_name,event_date,energybet_link,eight_sport_link,energybet_odds,eight_odds,book_maker_energybet,book_maker_eight,energybet_name,eight_name,home_team_eight,away_team_eight,home_team_energybet,away_team_energybet,sport_name,eight_section_id,energybet_section_id,energybet_is_suspended,energybet_event_id,eight_event_id,eight_icon,energybet_icon,game_score){
        this.event_name = event_name;
        this.event_date =  event_date;
        this.energybet_link =  energybet_link;
        this.eight_sport_link = eight_sport_link;
        this.energybet_odds =  energybet_odds;
        this.eight_odds =  eight_odds;
        this.bookmaker_energybet =  book_maker_energybet,
        this.bookmaker_eight =  book_maker_eight;
        this.energybet_name = energybet_name;
        this.eight_name =  eight_name;
        this.home_team_eight =  home_team_eight;
        this.away_team_eight =  away_team_eight;
        this.home_team_energybet =  home_team_energybet;
        this.away_team_energybet =  away_team_energybet;
        this.sport_name =  sport_name;
        this.eight_section_id =  eight_section_id;
        this.energybet_section_id =  energybet_section_id;
        this.energybet_is_suspended =  energybet_is_suspended;
        this.energybet_event_id =  energybet_event_id;
        this.eight_event_id =  eight_event_id;
        this.eight_icon =  eight_icon;
        this.energybet_icon =  energybet_icon;
        this.game_score =  game_score;

    }

    calculateSurebet(){
        const result = (1/parseFloat(this.energybet_odds)) + (1/parseFloat(this.eight_odds));

        if (result < 1){
            let anser = (1 - parseFloat(result)) * 100;

            let dicti ={
                sureb : "Prematch",
                surebet :  true,
                surebet_type : 2,
                home_team_eight : this.home_team_eight,
                away_team_eight :  this.away_team_eight,
                home_team_energybet : this.home_team_energybet,
                away_team_energybet :  this.away_team_energybet,
                event_name :  this.event_name,
                sport_name :  this.sport_name,
                event_date :  this.event_date,
                energybet_odds :  parseFloat(this.energybet_odds),
                eight_odds :  parseFloat(this.eight_odds),
                energybet_bookmaker :  this.bookmaker_energybet,
                eight_bookmaker :  this.bookmaker_eight,
                eight_link : `https://www.888sport.com/deeplink/?selections=[${this.eight_section_id}]`,
                energybet_link :  this.energybet_link ,
                eight_section_id : this.eight_section_id,
                energybet_name :  this.energybet_name,
                eight_name :  this.eight_name,
                energybet_section_id :  this.energybet_section_id,
                energybet_is_suspended :  this.energybet_is_suspended,
                energybet_event_id :  this.energybet_event_id,
                eight_event_id :  this.eight_event_id,
                profit : `${anser.toFixed(2)} %`,
                eight_icon : this.eight_icon,
                energybet_icon : this.energybet_icon,
                game_score :this.game_score


                
            }

          
            const profitt = new SendMessage.SendMessage(JSON.stringify(dicti))
            console.log("message eight",profitt.send_message().then((lk)=>{
                console.log(lk)
            }))
 

            return dicti
        }else{
            let dicti = {
                surebet :  false
            };

            console.log("energybet eight",dicti)

            return dicti;
        }
    }

}





export default SurebetTwoWayEightEnergybet;


// const m = new SurebetTwoWay("","","","",1,1,"0ne","888","","","","","",45678987654,181,0,12321,123432,"","")
// console.log("as",m.calculateSurebet())