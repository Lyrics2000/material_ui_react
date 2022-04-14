import HeaderComponent from './components/header/Header';
import Container from './components/container/Container';
import {ApolloClient,InMemoryCache,gql} from "@apollo/client";
import {GraphUrl} from './components/common/BaseUrl';
import { useEffect } from 'react';
import { simpleAction } from './components/redux/actions/simpleAction';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";


function App() {

  const dispatch = useDispatch();
  

  
  useEffect(() => {
    const client = new ApolloClient({
      uri: GraphUrl,
      cache: new InMemoryCache()
    });

    client
.query({
  query: gql`
  query {
    allCodes(combinationId: 14, page:1, combinationType: 2) {
      page
      pages
      hasNext
      hasPrev
      results {
        id
        eventName
        bookmaker1
        bookmaker2
        name1Code
        name2Code
        combinationId
        energyEightCombination {
          energybetEventId
          eightId
          energybetUrl
          eightEventLink
        }
      }
    }
  }
  `
})
.then(result => {
  
  console.log(result.data)
}).catch((error)=>{
  console.log(error)
});



},[])

const dist = () =>{
  dispatch(simpleAction())
}



  return (
    <div>
      <button onClick={dist} >Test redux action</button>
      {/* <HeaderComponent />
      <Container /> */}



    </div>
  );
}

export default App;
