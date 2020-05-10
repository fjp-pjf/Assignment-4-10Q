// if prime 1
function if_prime(){
    let arr = [11,7,22,99,2,16,43,7];
    let num = arr[0];
    document.getElementById("qon").innerHTML = num;
    
    for(let i = 2, s = Math.sqrt(num); i <= s; i++){
        if(num % i === 0){
          return false;
        }
      }
      document.getElementById("qonn").innerHTML = num + " is prime ";

      if (num < 2){
        return false;
      }
      if(num === 2){
        document.getElementById("qonn").innerHTML = num + " is prime ";
      }
}
  

// most frequent 2
function most_frequent(){
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
document.getElementById("qtw").innerHTML = (item+ " ( " +mf +" times ) ");
}

//case swap 3
function c_Swap(){
    var line = "The Silver Linings Playbook";
    var capitalizeString = (str) => str[0].toLowerCase() + str.slice(1).toUpperCase();
    var words = line.split(" ").map(capitalizeString).join(" ");
    document.getElementById("qth").innerHTML = words;
}

//squares 4
function sum_sq() {
     let arr = ["1","2","3","4","5"];
    var sum = 0, 
        i = arr.length;
    while (i--) 
     sum += Math.pow(arr[i], 2);
    
document.getElementById("qfo").innerHTML = sum;
}

//odd even 5 
function odd_Even(){
    let stmt1 = " ";
    let stmt2 = " ";
    for (let k = 0;k <=15;k++){
        if(k % 2 ===0){
            stmt1 += k;
            document.getElementById("qfi").innerHTML = stmt1 += "is even ";
            console.log(k + " is even ");
        }
    else {
        stmt2 += k;
        document.getElementById("qfiii").innerHTML = stmt2 +="is odd ";
        console.log(k + " is odd ");
    }
}
}
	
//truncate 6
function truncateString(){
  let str = "We have an army, We have a hulk";
  let num = 15;
  let result;
  if(num<=str.length){
    result = str;
  }
  if(num<=3){
    result = str.slice(0,num)+"...";
  }
  result = str.slice(0,num)+"...";
  document.getElementById("qsi").innerHTML = result;
}

//findLarge 7
function findLarge(a, b) {
if(a > b)
     return a;
else if(a === b)
    return 0;
else
    return b;
}
var first = Number(prompt('Enter first number')); 
var second = Number(prompt('Enter second number')); 
document.getElementById("qse").innerHTML = findLarge(first,second);

// alphabetical arr 8
  function alpha_arr(){
  var obj = {cont:"february"};
  for ( var i = 0 in obj){
    var x=obj[i].split('').sort().join('');
    document.getElementById('qei').innerHTML = x; 
  }
}

//js pattern 9
function pattern_java(){
  let data = 'Javascript'.split('');
  let output = '';
 for(let [index,value] of data.entries()){
   for(let i=0;i<=index;i++){
  output += data[i];
}
output += '<br>';
}
document.getElementById("qni").innerHTML = output;
}


//patterns star 10  
function py_Star() {
  let output = '';
  let row = '5';
  for(let i=1;i<=row;i++){
    for(let k=1;k<=i;k++){
      output+= '*';
    }
    output+= '<br>';
  }
  document.getElementById("qte").innerHTML = output;
}
  
  
 