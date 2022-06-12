 import {useState , useEffect} from  'react';
 import {LauchItem} from './components/LuachItem';
 import {Heading  , Image } from '@chakra-ui/react'
 import * as API from './services/lauches';
 import logo from './asset/logo.png';


export function App() {
    const [lauches ,setLauches] = useState([]);

    useEffect(()=>{
       API.getAllLauches().then(setLauches);
    } , []);

   return ( <>
         <Image  m={4} src={logo} alt="" width={300} />
        <Heading as="h1" size="lg">
           Sapacex Launches
        </Heading>
        <section> 
              {lauches.map((lauche) =>(
                 <LauchItem  key={lauche.flight_number}  {...lauche}/>
              ))}
        </section>
     </>)
}

