class Table {
  constructor(
    nVar=2,nCon=3,C,A,b
    ){
    this.nVar=nVar;
    this.nCon=nCon;
    this.C=[0,...C,...new Array(nCon).fill(0)];
    this.b=b;
    let ideA=ide(nCon);
    this.pvI=null;
    this.pvJ=null;
    this.A=A.slice(0);
    this.A.forEach((a,i)=>a.push(...ideA[i]));

    this.arr=this.A.slice(0);
    this.arr.forEach((a,i)=>a.unshift(b[i]));
    
    this.arr.push(this.C);
    
  }

  

  show(){
    let arr=this.arr;
    arr=arr.reduce((ac,e,i)=>
      {
        let indx=i!=arr.length-1?'x'+(i+3):'z';
        if(this.pvJ&&i==this.pvI)indx='x'+this.pvJ;
        ac[indx]=new line(e);return ac}
    ,{});

    console.table(
    arr
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


module.exports=Table;