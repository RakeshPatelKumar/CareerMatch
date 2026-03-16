import {Inngest} from "inngest";

// create a client to send and recieve events 
export const inngest = new Inngest({  id: "Careermatch", name: "Careermatch",
    credentials: {
        gemini: { apiKey: process.env.GEMINI_API_KEY, 
            
        },
    }
 });

