//your JS code here. If required.
function findfnrc(inputString){
	const frequencyMap =  new Map();

	//count the occurrence of each character in the string
	for (const char of inputString){
		if(frequencyMap.has(char)){
			frequencyMap.set(char,frequencyMap.get(char)+);
		} else{
			frequencyMap.set(char,1);
		}
	}
	//find first nrc
	for (const char of inputString){
		if(frequencyMap.get(char)===1){
			return char;
		}
	}

	//return null if no non-repeated character is found
	return null;
}
//taking input using prompt()
const inputString = prompt("Enter a string:");
const result == findfnrc(inputString);

if(result){
	console.log(result);
}  else{
	console.log(" ");
}