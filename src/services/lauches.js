const API_URL = 'https://api.spacexdata.com/v3';

//create function get all lauches
export  async function getAllLauches(){
     try {
        const response  = await fetch(`${API_URL}/launches`); 
        const data  =  await response.json(); 
        return data;
     }catch(error){
        console.log(error);
     }
}

export async function getLauchesByFlightNumber(flightNumber){
        try{
            const response  = await fetch(`${$API_URL}/launches/${flightNumber}`);
            const data  =  await response.json(); 
            return data;
        }catch (error){
            
        }
}
