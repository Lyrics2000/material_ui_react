import axios from "axios"
// const API_KEY = "1375385905:AAEUDv5aB5EBLTQOOB45c0nsi8r9djisqdg"
// const get_chat_id = "https://api.telegram.org/bot1375385905:AAEUDv5aB5EBLTQOOB45c0nsi8r9djisqdg/getUpdates"
// const send_message = "https://api.telegram.org/bot1375385905:AAEUDv5aB5EBLTQOOB45c0nsi8r9djisqdg/sendMessage?chat_id=-1001238170575&text='hello everyone'"


const url = 'https://api.telegram.org/bot1375385905:AAEUDv5aB5EBLTQOOB45c0nsi8r9djisqdg/sendMessage'


 class SendMessage{
    constructor(message){
        this.message =  message
    }

    send_message(){
        const res = axios.get(url,{params:{
            chat_id:"-1001238170575",
            text:this.message
        }}).then((rs)=>{
            return rs
        })

        return res

    }
}


export default SendMessage;

// const app = new SendMessage("Testing arbs before making money ..tg bot")

// console.log("message",app.send_message().then((res)=>{
//     console.log(res.data)
// }))