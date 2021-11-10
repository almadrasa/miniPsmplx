function line(arr){
for (let i in arr){
        this[i==0?'b':'x'+i]=arr[i];
}
}
 arr=[
[4,1,0,1,0,0],
[12,0,2,0,1,0],
[18,3,2,0,0,1],
[0,300,500,0,0,0]
];
console.table(
arr.reduce((ac,e,i)=>
	{ac[i!=arr.length-1?'x'+(i+3):'z']=new line(e);return ac}
,{})
)