import * as z from 'zod';

export const formSchema = z.object({
    location: z.string().min(2, "Must be 2 characters").max(50),
    dates: z.object({
        from: z.date(),
        to: z.date()
    }),
    adults: z.string().min(1, {
        message: "Please select at least 1 adult",
            }).max(12, {
                   message: "Max 12 adults occupancy"
                        }),
    children: z.string().min(0).max(12, {
        message: "Max 12 children Occupancy"
    }),
    rooms: z.string().min(1, {
        message: "Please select at least 1 room"
    })
    

})