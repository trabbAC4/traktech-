

function handler(req:any, res:any) {
    res.json({message: "It works!"});
}

export default handler;


async function submitHandler (data) {
	const response = await fetch("/api/sheet", {
    		method: "POST",
        	body: JSON.stringify(data),
        	headers: {
        		'Content-Type': 'application/json',
      		},
    	})
}


