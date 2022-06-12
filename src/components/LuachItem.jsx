import { Box , Flex , Spacer , Text , Tag ,Button , Icon} from '@chakra-ui/react'
import {FaCalendarCheck} from 'react-icons/fa'

import dayjs from 'dayjs';
import 'dayjs/locale/es';


export function LauchItem (lauche){
   return (
    <Box
    bg="gray.100" 
    p="4"
    m="4"  
    borderRadius="md" 
    color="black" 
   >
       <Flex display="flex">
            <Text fontSize="2xl">
                 Mission <strong>{lauche.mission_name}</strong> (
                    {lauche.launch_year} )
            </Text>
             <Spacer/>
            <Tag p="2"  colorScheme={lauche.launch_success ? "green" : "red"}>
                {lauche.launch_success ? "Success" : "Failure"}
            </Tag>
       </Flex>
          <Flex align="center">
               <Icon  as={FaCalendarCheck} color="gray.500"/>
                {" "}
                <Text fontSize="sm" ml={1} color="gray.500">
                    { dayjs(lauche.launch_date_local).locale("es").format("DD MMMM YYYY")}
                </Text>
          </Flex>
          <Button mt={2} colorScheme="whatsapp" variant="outline">More Detail</Button>
   </Box>
     
   )
}