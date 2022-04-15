import HeaderComponent from './components/header/Header';
import Container from './components/container/Container';
import {ApolloClient,InMemoryCache,gql} from "@apollo/client";
import {GraphUrl} from './components/common/BaseUrl';
import { useEffect } from 'react';
import { simpleAction } from './components/redux/actions/simpleAction';
import { useDispatch } from "react-redux";
import { OVERUNDER } from './components/redux/action_types/ActionTypes';
import { eightEnergybetQuery } from './components/common/important_functions';

function App() {


  const getSSE = () =>{
    const sse = new EventSource('http://localhost:3001/events');
  function getRealtimeData(data) {
    // process the data here,
    // then pass it to state to be rendered
    console.log("data logged",data)
  }
  sse.onmessage = e => getRealtimeData(JSON.parse(e.data));
  sse.onerror = () => {
    // error log here 
    
    sse.close();
  }
  return () => {
    sse.close();
  };
}

  const dispatch = useDispatch();

  const dispatchAction = (element) =>{

    const allCodes =  element.allCodes.results

    allCodes.forEach(element => {
      if(element.combinationId ===  14 && element.eventName.toLowerCase().includes("over/under")){
        // console.log("ele",element)
        dispatch(simpleAction({
          type:OVERUNDER,
          payload:element
        }))
      }
      
      
    });

  
    
  }

  const call_graphql = (combinationId,page,combinationType) =>{
        const client = new ApolloClient({
          uri: GraphUrl,
          cache: new InMemoryCache()
        });

        client
    .query({
      query: eightEnergybetQuery(combinationId,page,combinationType)
    })
    .then(result => {

      console.log(page,result.data)
      dispatchAction(result.data)
      const allCodes =  result.data.allCodes.pages
      const pagei = result.data.allCodes.page + 1;
      if(page <allCodes){
        setTimeout(function() {
        call_graphql(combinationId,pagei,combinationType)
      }, 10000);
      }else if(page === allCodes ){
        setTimeout(function() {
        call_graphql(combinationId,1,combinationType)
      }, 10000);

      }
      
      
    }).catch((error)=>{
      console.log(error)
    });

  }
  

  
  useEffect(() => {

    getSSE()
    call_graphql(14,1,2)

   



},[])



  return (
    <div>
     
      <HeaderComponent />
      <Container />



    </div>
  );
}

export default App;
