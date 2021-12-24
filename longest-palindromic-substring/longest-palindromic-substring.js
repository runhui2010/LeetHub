/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(string) {
  const str=string.split('');
	let res=[];
	for(let i=0;i<str.length;i++){
		let subArr=lengthOfPalindrome(str,i);
		
		res=res.length>subArr.length?res:subArr;
	}
	return res.join('');
}
function lengthOfPalindrome(arr,index){
	let arr1=[];
	let arr2=[arr[index]];
	let range1=0;
	while(arr[index-range1]===arr[index+range1+1] && arr[index-range1]!==undefined){
		arr1.push(arr[index-range1]);
		arr1.unshift(arr[index-range1]);
		range1++;
	}
	let range2=0;
	while(arr[index-range2-1]===arr[index+range2+1] && arr[index-range2-1]!==undefined){
		arr2.push(arr[index-range2-1]);
		arr2.unshift(arr[index-range2-1]);
		range2++;
	}
	if(arr1.length>arr2.length){
		return arr1
	}else{
		return arr2;
	}
}

