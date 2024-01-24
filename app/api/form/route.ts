

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


//SAMPLE BOILERPLATE INFO FOR CHECKOUT PAGE


// async function proceedCheckout(data) {
// 	const response = await fetch ("/api/checkout", {
// 		method: "POST",
// 		body: JSON.stringify(data),
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 	})
// 	//Fill params and update CRM on this
// 	//Do a try and except where it returns an error 404 if there is an issue 

// }