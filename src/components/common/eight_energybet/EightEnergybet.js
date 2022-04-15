import GetGame from '../eight/Eight.js'
import GetEnergyBet from '../energybet/GetEnergyBet.js'
import SurebetTwoWayEightEnergybet from './TwoWaySurebet.js'

const eight_icon = ""
const energybet_icon = ""


class EigtEnergybetSurebet{
    constructor(data,eight_market,energy_market){
        this.data =  data;
        this.eight_market =  eight_market;
        this.energy_market =  energy_market;
    }

    get_eight_response(){
        const eigh =  new GetGame(this.data,this.eight_market).getMarkets().then((resp)=>{
            // console.log(resp)
            return resp
            
        })
        
        return eigh

    }


    get_energybet_response(){
        const energyt =  new GetEnergyBet(this.data.energybet_event_id).getMarket(this.energy_market).then((resp)=>{
            // console.log(resp)
            return resp;
        })

        return energyt;
    }


    get_eight_eigh_event(){
        // const eight_m = new GetGame(this.data,this.eight_market)
        // const eight_l = eight_m.getMarkets()

        
    }

    surebetBBS(){
        console.log("bbs")
        const eight_resp =  this.get_eight_response().then((k)=>{
            const energybet_resp =  this.get_energybet_response().then((l)=>{
                let empty_list = []
                if(typeof l !== 'undefined' && typeof k !== 'undefined' && k !== false){
                    l.forEach(elemet => {
                        // console.log("energybet_elemet",elemet)
                        k.forEach(element_eight => {
                            if(elemet.name.toLowerCase().trim() === "yes"  && element_eight.section_name.toLowerCase().trim() === "no" ){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
                            }else if(elemet.name.toLowerCase().trim() === "no"  && element_eight.section_name.toLowerCase().trim() === "yes" ){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
    
                            }
    
    
                            
                        });
                        
                        
                    });

                }
               

                return empty_list
            })

            return energybet_resp;

        })

        return eight_resp
    }


    surebetOverUnder(){
        console.log("over under")
        const eight_resp =  this.get_eight_response().then((k)=>{
            // console.log("eight resp",k)
            const energybet_resp =  this.get_energybet_response().then((l)=>{
                let empty_list = []
                // console.log("en",l)
                if(typeof k !== 'undefined' && typeof l !== 'undefined' && k !== false){
                    l.forEach(elemet => {
                        const energybet_name_m = elemet.name.split("(")[0].trim()
                        const energy_cu = elemet.name.split("(")[1].split(")")[0]
                        
                        
                        k.forEach(element_eight => {
                        const eight_cu = element_eight.section_name.split("(")[1].split(")")[0]
                        const eight_name_m = element_eight.section_name.split("(")[0].trim()
    
                            if(energybet_name_m.toLowerCase() === "over"  && eight_name_m.toLowerCase() === "under" ){
                                console.log("energy m",energybet_name_m,eight_name_m)
                                if(parseFloat(energy_cu) == parseFloat(eight_cu)){
                                    const surebet = new  SurebetTwoWayEightEnergybet(
                                        element_eight.event_name,
                                        this.data.energybet_startime,
                                        this.data.energybet_url,
                                        this.data.eight_link,
                                        elemet.rate.decimal,
                                        element_eight.section_price,
                                        "Energybet",
                                        "888Sports",
                                        elemet.name,
                                        element_eight.section_name,
                                        this.data.eight_home_team,
                                        this.data.eight_away_team,
                                        this.data.energybet_home_team,
                                        this.data.energybet_away_team,
                                        this.data.sports_name,
                                        element_eight.section_id,
                                        elemet.section_id,
                                        elemet.isSuspended,
                                        this.data.energybet_id,
                                        this.data.eight_id,
                                        eight_icon,
                                        energybet_icon,
                                        this.data.game_score
        
        
                                    ).calculateSurebet()
                                    empty_list.push(surebet)
                                }
                            }else if(energybet_name_m.toLowerCase() === "under"  && eight_name_m.toLowerCase() === "over" ){
                                if(parseFloat(energy_cu) ===  parseFloat(eight_cu)){
                                    const surebet = new  SurebetTwoWayEightEnergybet(
                                        element_eight.event_name,
                                        this.data.energybet_startime,
                                        this.data.energybet_url,
                                        this.data.eight_link,
                                        elemet.rate.decimal,
                                        element_eight.section_price,
                                        "Energybet",
                                        "888Sports",
                                        elemet.name,
                                        element_eight.section_name,
                                        this.data.eight_home_team,
                                        this.data.eight_away_team,
                                        this.data.energybet_home_team,
                                        this.data.energybet_away_team,
                                        this.data.sports_name,
                                        element_eight.section_id,
                                        elemet.section_id,
                                        elemet.isSuspended,
                                        this.data.energybet_id,
                                        this.data.eight_id,
                                        eight_icon,
                                        energybet_icon,
                                        this.data.game_score
        
        
                                    ).calculateSurebet()
                                    empty_list.push(surebet)
                                }
    
                            }
    
    
                            
                        });
                        
                        
                    });

                }
                
               

                return empty_list
            })

            return energybet_resp;

        })

        return eight_resp
        
    }



    assianHandicap(){

        const eight_resp =  this.get_eight_response().then((k)=>{
            const energybet_resp =  this.get_energybet_response().then((l)=>{
                let empty_list = []
                // console.log("en",l)
                if(typeof k !== 'undefined' && typeof l !== 'undefined' && k !== false ){
                    l.forEach(elemet => {
                        const energybet_name_m = elemet.name.split("(")[0].trim()
                        const energy_cu = elemet.name.split("(")[1].split(")")[0]
                        
                        
                        k.forEach(element_eight => {
                        const eight_cu = element_eight.section_name.split("(")[1].split(")")[0]
                        const eight_name_m = element_eight.section_name.split("(")[0].trim()
                        
                            if(energybet_name_m.toLowerCase() === this.data.energybet_home_team.trim().toLowerCase()  && eight_name_m.toLowerCase() === this.data.eight_away_team.trim().toLowerCase() ){
                                // console.log("energy m",parseFloat(energy_cu),parseFloat(eight_cu))
                                if(typeof eight_cu == "string" && eight_cu.indexOf(`-`) > -1 == !(typeof energy_cu == "string" && energy_cu.indexOf(`-`) > -1)){
                                    const cut_eight = eight_cu.split("-")[1]
    
                                    if(parseFloat(cut_eight) === parseFloat(energy_cu)){
    
                                    const surebet = new  SurebetTwoWayEightEnergybet(
                                        element_eight.event_name,
                                        this.data.energybet_startime,
                                        this.data.energybet_url,
                                        this.data.eight_link,
                                        elemet.rate.decimal,
                                        element_eight.section_price,
                                        "Energybet",
                                        "888Sports",
                                        elemet.name,
                                        element_eight.section_name,
                                        this.data.eight_home_team,
                                        this.data.eight_away_team,
                                        this.data.energybet_home_team,
                                        this.data.energybet_away_team,
                                        this.data.sports_name,
                                        element_eight.section_id,
                                        elemet.section_id,
                                        elemet.isSuspended,
                                        this.data.energybet_id,
                                        this.data.eight_id,
                                        eight_icon,
                                        energybet_icon,
                                        this.data.game_score
        
        
                                    ).calculateSurebet()
                                    empty_list.push(surebet)
    
                                    }
    
                                    
                                   
                                }else if(typeof energy_cu == "string" && energy_cu.indexOf(`-`) > -1 == !(typeof eight_cu == "string" && eight_cu.indexOf(`-`) > -1)){
    
                                    const cut_eight = energy_cu.split("-")[1]
    
                                    if(parseFloat(cut_eight) === parseFloat(energy_cu)){
    
                                    const surebet = new  SurebetTwoWayEightEnergybet(
                                        element_eight.event_name,
                                        this.data.energybet_startime,
                                        this.data.energybet_url,
                                        this.data.eight_link,
                                        elemet.rate.decimal,
                                        element_eight.section_price,
                                        "Energybet",
                                        "888Sports",
                                        elemet.name,
                                        element_eight.section_name,
                                        this.data.eight_home_team,
                                        this.data.eight_away_team,
                                        this.data.energybet_home_team,
                                        this.data.energybet_away_team,
                                        this.data.sports_name,
                                        element_eight.section_id,
                                        elemet.section_id,
                                        elemet.isSuspended,
                                        this.data.energybet_id,
                                        this.data.eight_id,
                                        eight_icon,
                                        energybet_icon,
                                        this.data.game_score
        
        
                                    ).calculateSurebet()
                                    empty_list.push(surebet)
    
                                    }
    
    
                                }
                            }else if(energybet_name_m.toLowerCase() === this.data.energybet_away_team.trim().toLowerCase()  && eight_name_m.toLowerCase() === this.data.eight_home_team.trim().toLowerCase()){
                                if(typeof eight_cu == "string" && eight_cu.indexOf(`-`) > -1 == !(typeof energy_cu == "string" && energy_cu.indexOf(`-`) > -1)){
                                    const cut_eight = eight_cu.split("-")[1]
    
                                    if(parseFloat(cut_eight) === parseFloat(energy_cu)){
    
                                    const surebet = new  SurebetTwoWayEightEnergybet(
                                        element_eight.event_name,
                                        this.data.energybet_startime,
                                        this.data.energybet_url,
                                        this.data.eight_link,
                                        elemet.rate.decimal,
                                        element_eight.section_price,
                                        "Energybet",
                                        "888Sports",
                                        elemet.name,
                                        element_eight.section_name,
                                        this.data.eight_home_team,
                                        this.data.eight_away_team,
                                        this.data.energybet_home_team,
                                        this.data.energybet_away_team,
                                        this.data.sports_name,
                                        element_eight.section_id,
                                        elemet.section_id,
                                        elemet.isSuspended,
                                        this.data.energybet_id,
                                        this.data.eight_id,
                                        eight_icon,
                                        energybet_icon,
                                        this.data.game_score
        
        
                                    ).calculateSurebet()
                                    empty_list.push(surebet)
    
                                    }
    
                                    
                                   
                                }else if(typeof energy_cu === "string" && energy_cu.indexOf(`-`) > -1 === !(typeof eight_cu === "string" && eight_cu.indexOf(`-`) > -1)){
    
                                    const cut_eight = energy_cu.split("-")[1]
    
                                    if(parseFloat(cut_eight) === parseFloat(energy_cu)){
    
                                    const surebet = new  SurebetTwoWayEightEnergybet(
                                        element_eight.event_name,
                                        this.data.energybet_startime,
                                        this.data.energybet_url,
                                        this.data.eight_link,
                                        elemet.rate.decimal,
                                        element_eight.section_price,
                                        "Energybet",
                                        "888Sports",
                                        elemet.name,
                                        element_eight.section_name,
                                        this.data.eight_home_team,
                                        this.data.eight_away_team,
                                        this.data.energybet_home_team,
                                        this.data.energybet_away_team,
                                        this.data.sports_name,
                                        element_eight.section_id,
                                        elemet.section_id,
                                        elemet.isSuspended,
                                        this.data.energybet_id,
                                        this.data.eight_id,
                                        eight_icon,
                                        energybet_icon,
                                        this.data.game_score
        
        
                                    ).calculateSurebet()
                                    empty_list.push(surebet)
    
                                    }
    
    
                                }
    
                            }
    
    
                            
                        });
                        
                        
                    });

                }
                
                

                return empty_list
            })

            return energybet_resp;

        })

        return eight_resp
        
    }

    surebetDrawNoBet(){
        const eight_resp =  this.get_eight_response().then((k)=>{
            const energybet_resp =  this.get_energybet_response().then((l)=>{

                
                let empty_list = []
                if(typeof k !== 'undefined' && typeof l !== 'undefined' && k !== false){

                    l.forEach(elemet => {
                        // console.log("energybet_elemet",elemet)
                        // console.log("eight_element",k)
                        k.forEach(element_eight => {
                            if(parseInt(elemet.order) === 1  && element_eight.section_name.toLowerCase().trim() === this.data.eight_away_team.toLowerCase().trim() ){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
                            }else if(parseInt(elemet.order) === 2  && element_eight.section_name.toLowerCase().trim() === this.data.eight_home_team.toLowerCase().trim()){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
    
                            }
    
    
                            
                        });
                        
                        
                    });
                }

                

                return empty_list
            })

            return energybet_resp;

        })

        return eight_resp
    }



    surebetOddsEven(){
        const eight_resp =  this.get_eight_response().then((k)=>{
            const energybet_resp =  this.get_energybet_response().then((l)=>{
                let empty_list = []
                if(typeof k !== 'undefined' && typeof l !== 'undefined' && k !== false){

                    l.forEach(elemet => {
                        // console.log("energybet_elemet",elemet)
                        k.forEach(element_eight => {
                            if(elemet.name.toLowerCase().trim() === "odd"  && element_eight.section_name.toLowerCase().trim() === "even" ){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
                            }else if(elemet.name.toLowerCase().trim() === "even"  && element_eight.section_name.toLowerCase().trim() === "odd" ){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
    
                            }
    
    
                            
                        });
                        
                        
                    });

                }
                

                return empty_list
            })

            return energybet_resp;

        })

        return eight_resp
    }


    surebetDoubleChangeEightEnergybet(){
        const eight_resp =  this.get_eight_response().then((k)=>{
            const energybet_resp =  this.get_energybet_response().then((l)=>{
                let empty_list = []
                if(typeof k !== 'undefined' && typeof l !== 'undefined' && k !== false){

                    l.forEach(elemet => {
                        // console.log("energybet_elemet",elemet)
                        k.forEach(element_eight => {
                            if(parseInt(elemet.order) === 3  && element_eight.section_name.toLowerCase().trim() === this.data.eight_home_team.toLowerCase().trim() ){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
                            }else if(parseInt(elemet.order) === 1  && element_eight.section_name.toLowerCase().trim() === this.data.eight_away_team.toLowerCase().trim()){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
    
                            }else if(parseInt(elemet.order) === 2  && element_eight.section_name.toLowerCase().trim() === "draw"){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
    
                            }
    
    
    
    
                            
                        });
                        
                        
                    });

                }
                

                return empty_list
            })

            return energybet_resp;

        })

        return eight_resp
    }


    surebetDoubleChangeEnergybetEight(){
        const eight_resp =  this.get_eight_response().then((k)=>{
            const energybet_resp =  this.get_energybet_response().then((l)=>{
                let empty_list = []
                if(typeof k !== 'undefined' && typeof l !== 'undefined' && k !== false){


                    l.forEach(elemet => {
                        // console.log("energybet_elemet",elemet)
                        k.forEach(element_eight => {
                            if(parseInt(elemet.order) === 3  && element_eight.section_name.toLowerCase().trim() === `${this.data.eight_home_team.toLowerCase().trim()} or draw` ){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
                            }else if(parseInt(elemet.order) === 1  && element_eight.section_name.toLowerCase().trim() === `draw or ${this.data.eight_away_team.toLowerCase().trim()}`){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
    
                            }else if(parseInt(elemet.order) === 2  && element_eight.section_name.toLowerCase().trim() === `${this.data.eight_home_team.toLowerCase().trim()} or ${this.data.eight_away_team.toLowerCase().trim()}`){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
    
                            }
    
    
    
    
                            
                        });
                        
                        
                    });

                }
                

                return empty_list
            })

            return energybet_resp;

        })

        return eight_resp
    }


    surebetTwoWay(){
        const eight_resp =  this.get_eight_response().then((k)=>{
            const energybet_resp =  this.get_energybet_response().then((l)=>{
                let empty_list = []
                if(typeof l !== 'undefined' && typeof k !== 'undefined' && k !== false){
                    l.forEach(elemet => {
                        // console.log("energybet_elemet",elemet)
                        k.forEach(element_eight => {
                            if(elemet.name.toLowerCase().trim() === this.data.energybet_home_team.toLowerCase().trim()  && element_eight.section_name.toLowerCase().trim() === this.data.eight_away_team.toLowerCase().trim() ){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
                            }else if(elemet.name.toLowerCase().trim() === this.data.energybet_away_team.toLowerCase().trim()  && element_eight.section_name.toLowerCase().trim() === this.data.eight_home_team.toLowerCase().trim() ){
                                const surebet = new  SurebetTwoWayEightEnergybet(
                                    element_eight.event_name,
                                    this.data.energybet_startime,
                                    this.data.energybet_url,
                                    this.data.eight_link,
                                    elemet.rate.decimal,
                                    element_eight.section_price,
                                    "Energybet",
                                    "888Sports",
                                    elemet.name,
                                    element_eight.section_name,
                                    this.data.eight_home_team,
                                    this.data.eight_away_team,
                                    this.data.energybet_home_team,
                                    this.data.energybet_away_team,
                                    this.data.sports_name,
                                    element_eight.section_id,
                                    elemet.section_id,
                                    elemet.isSuspended,
                                    this.data.energybet_id,
                                    this.data.eight_id,
                                    eight_icon,
                                    energybet_icon,
                                    this.data.game_score
    
    
                                ).calculateSurebet()
                                empty_list.push(surebet)
    
                            }
    
    
                            
                        });
                        
                        
                    });

                }
               

                return empty_list
            })

            return energybet_resp;

        })

        return eight_resp
    }



    


}

export default EigtEnergybetSurebet


// const d =      {
//     "id": 1954,
//     "energybet_home_team": "Lukas Kleckers",
//     "energybet_away_team": "Soheil Vahedi",
//     "energybet_league": "world",
//     "energybet_country": "c",
//     "energybet_startime": "2022-04-04T18:30:00+00:00",
//     "energybet_url": "http://127.0.0.1",
//     "energybet_event_id": 11345589,
//     "eight_home_team": "Kleckers, Lukas",
//     "eight_away_team": "Vahedi, Soheil",
//     "eight_start_time": "2022-04-04T18:30:00.000Z",
//     "sport_name": "Snooker",
//     "eight_event_link": "https://www.888sport.com/snooker/international/world-championship/kleckers-lukas-v-vahedi-soheil-e-1815493",
//     "eight_true_odds_link": "https://spectate-web.888sport.com/spectate/sportsbook/getEventData/snooker/international/world-championship/kleckers-lukas-v-vahedi-soheil/1815493",
//     "eight_league": "World Championship",
//     "eight_country": "International",
//     "eight_id": 1815493
// }  

// const ll = JSON.parse(JSON.stringify(d))



// const app = new EigtEnergybetSurebet(ll,1350707,80)
// console.log(app.surebetTwoWay().then((l)=>{
//     console.log(l)
// }))

