

interface IEmailProps {
   email:string
   
  }

export const postEmails = async (email: IEmailProps) => {
    console.log("email",email)
    
    const res = await fetch("/api/addSubscription", {
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
    });
    const data = await res.json();
    return data

}