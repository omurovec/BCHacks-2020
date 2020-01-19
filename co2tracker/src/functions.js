const functionsURL =
	"https://us-central1-co2tracker-8e74a.cloudfunctions.net/";

export default async (type, params) => {
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify(params);

	var requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow"
	};

	fetch(functionsURL + type, requestOptions)
		.then(response => response.json())
		.catch(error => console.log("error", error));
};
