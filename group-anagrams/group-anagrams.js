/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(words) {
	const table={};
	const res=[];
	let count=0;
  for(let i=0;i<words.length;i++){
		let sortWord=words[i].split('').sort().join('');
		if(table[sortWord]!==undefined){
			res[table[sortWord]].push(words[i]);
		}else{
			table[sortWord]=count;
			count++
			res.push([words[i]]);
		}
		
	}
	console.log(res)
	return res;
}
