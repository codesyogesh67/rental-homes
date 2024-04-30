import axios from 'axios';
import fetch from 'node-fetch';

interface ILocationParams{
    address?: string
}




export async function getLocations(listings) {
    try {
        const positions = [];

        for (const { prop_addr, prop_city, prop_state, prop_zip } of listings) {
            const address = prop_addr +" "+ prop_city +" " + prop_state +" " + prop_zip;
            console.log("address",address)

            const response = await axios.get(`http://nominatim.openstreetmap.org/search?q=${address}&format=json`, {
                headers: {
                    'User-Agent': 'ID of your APP/service/website/etc. v0.1'
                }
            });

            const responseData = response.data[0];
            positions.push([responseData['lat'], responseData['lon']]);
        }

        return positions;
    } catch (error) {
        console.error('Error fetching locations:', error);
        return []; // Or handle the error in a meaningful way
    }
}
