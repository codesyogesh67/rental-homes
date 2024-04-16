import * as z from "zod"

export const searchFormSchema = z.object({
   leaseType:z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  bedroomsCount: z.string(),
  bathroomsCount: z.string()
 
})


export const subscribeFormSchema = z.object({
  firstName:z.string(),
  lastName:z.string(),
  email:z.string(),


})


