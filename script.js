function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s1 == '' && s2 != ''){
		return -1
	}
	let str1 = s1.toLowerCase();
	let str2 = s2.toLowerCase();
	let arr = [];
	if(str1.includes(str2)){
		arr = str1.split(str2);
	}
	else{
		return -1;
	}
	return arr[0].length;
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
