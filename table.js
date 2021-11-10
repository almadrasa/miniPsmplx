class Table {
  constructor(
    nVar=2,nCon=3,A,C,b
    ){
    this.nVar=nVar;
    this.nCon=nCon;
    this.C=[0,...C,...new Array(nCon).fill(0)];
    this.b=b;
    let ideA=ide(nCon);
    this.A=A.map((a,i)=>a.push(...ideA[i]));
    this.arr=[];
    
  }

  showT(arr){
    console.table(
    arr.reduce((ac,e,i)=>
      {ac[i!=arr.length-1?'x'+(i+3):'z']=new line(e);return ac}
    ,{})
    )    
  }
}

function line(carr){
  for (let i in carr){
    this[i==0?'b':'x'+i]=carr[i];
  }
}
function ide(nCon=3){
  let arr=[];
  for(let i=0;i<nCon;i++){
    arr[i]=[];
    for(let j=0;j<nCon;j++){
      arr[i][j]=i==j?1:0;
    }      
  }
  return arr
}
