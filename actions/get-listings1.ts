// import { GetAllListingsParams } from '@/types';
// // import { Category, Course } from "@prisma/client";

// // import { getProgress } from "@/actions/get-progress";
// import { db } from "@/lib/db";
// import {listing_selectives} from "@/constants"



// type GetListings = {

//   title?: string;
//   categoryId?: string;
// };

// export const getListings = async ({ query, limit = 6, page }: GetAllListingsParams) => {
 
//   try {
//     let listings;
//     const {leaseType,startDateTime,endDateTime,bedroomsCount,bathroomsCount} = query
  

//     if (leaseType === 'Season') {
    
//       listings = await db.property?.findMany({
//         where: {
//           NOT: {
//             prices: '', // Exclude records where prices is an empty string
//           },
//           AND: [
//             // { startDateTime: { lte: startDateTime } }, // Listings with startDateTime less than or equal to specified startDateTime
//             // { endDateTime: { gte: endDateTime } },     // Listings with endDateTime greater than or equal to specified endDateTime
//             { bath: bathroomsCount },          // Listings with bathroomsCount equal to specified bathroomcount
//             { bedroom: bedroomsCount },            // Listings with bedroomsCount equal to specified bedroomcount
//           ],
//         },
//         select: listing_selectives,
//         take: limit,
//         skip: (page - 1) * limit,
//       });
//     }
//     else if (leaseType === 'Weekly') {
//       listings = await db.property?.findMany({
//         where: {
//           NOT: {
//             pricew: '', // Exclude records where prices is an empty string
//           },
//           AND: [
//             // { startDateTime: { lte: startDateTime } }, // Listings with startDateTime less than or equal to specified startDateTime
//             // { endDateTime: { gte: endDateTime } },     // Listings with endDateTime greater than or equal to specified endDateTime
//             { bath: bathroomsCount },          // Listings with bathroomsCount equal to specified bathroomcount
//             { bedroom: bedroomsCount },            // Listings with bedroomsCount equal to specified bedroomcount
//           ],
//         },
//         select: listing_selectives,
//         take: limit,
//         skip: (page - 1) * limit,
//       });
//     } 
    
//     else {
//       // For 'Weekly' query, or other queries, fetch listings without filtering
//       listings = await db.property?.findMany({
//         select: listing_selectives,
//         take: limit,
//         skip: (page - 1) * limit,
//       });
//     }

//     return listings;
//   } catch (error) {
//     console.error('Error fetching properties:', error);
//     throw error;
//   } finally {
//     await db.$disconnect();
//   }
// };

//     // GET ONE EVENT BY ID
// export async function getListingByIndex(index:number) {
//   try {
//     const listing = await db.property?.findFirst({
//       select: {
//         title: true,
//         prop_addr: true,
//         pricew: true,
//         prices: true,
//         bedroom: true,
//         bath: true,
//         avail: true,
//         img1: true,
//         img2: true,
//         img3: true,
//         img4: true,
//         img5: true,
//         img6: true,
//         img7: true,
//         img8: true,
//         img9:true
//       },
//       skip: index, // Offset by index
//       take: 1, // Only fetch one listing
//     });
  
//     return listing;
//       } catch (error) {
//         console.error('Error fetching properties:', error);
//         throw error;
//       } finally {
//         await db.$disconnect();
//       }
//     };
