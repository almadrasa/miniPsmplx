class Table {
  constructor(
    nVar=2,nCon=3,C,A,b
    ){
    this.nVar=nVar;
    this.nCon=nCon;
    this.S=new Array(nCon).fill(null);
    this.z=0;
    this.C=[0,...C,...new Array(nCon).fill(0)];
    this.b=b;
    let ideA=ide(nCon);
    this.pvI=null;
    this.pvJ=null;
    this.pivo=null;
    this.A=A.map(r=>r.slice());
    this.A.forEach((a,i)=>a.push(...ideA[i]));

    this.arr=this.A.map(r=>r.slice());
    this.arr.forEach((a,i)=>a.unshift(b[i]));
    
    this.arr.push(this.C);
    this.tables=[this.ar2O(this.arr)];
    this.o=this.tables[0];
    // this.solve();
  }

  calcPivo(){
    let c=this.arr[this.nCon];
    this.pvJ=c.indexOf(Math.max(...c));
    let b=this.arr.map((e,i)=>
      e[this.pvJ]>0?this.arr[i][0]/e[this.pvJ]:Number.POSITIVE_INFINITY
    );
    b.pop();
    this.pvI=b.indexOf(Math.min(...b));
    this.pivo=this.arr[this.pvI][this.pvJ];
    this.pvL=this.arr[this.pvI];
    let s=this.arr.map((e,i)=>e[i][0]);
    s.pop();
    /*if(this.pvJ<=this.nVar)*/this.S[this.pvI]=this.pvJ;
  }

  solve(){
    this.show();
    this.calcPivo();
    this.arr.forEach((e,i,arr)=>{
      e.forEach((x,j)=>{
        if(i==this.pvI||j==this.pvJ)return;
        let tn=x-n((e[this.pvJ]*this.pvL[j])/this.pivo);
        let ts=tn.toString();
        tn=ts.includes('.')&&ts.length>5?n(tn):tn;
        e[j]=tn;
      })
    });    
    this.pvL.forEach((e,i,ar)=>ar[i]=n(e/this.pivo));
    this.arr.forEach((e,i)=>e[this.pvJ]=i!=this.pvI?0:e[this.pvJ]);
    this.save();
    if(this.isFinal()){
      let s=this.arr.map((e,i)=>e[0]);
      //console.log('s:',s);
      //console.log('S:',this.S);
      this.show();
      let lo=this.S.filter(e=>e).map((e,i)=>'x'+e+' = '+s[i]);
      console.log(lo.join('\n'));
      this.z=s.pop()*-1;
      console.log('z = ',this.z);
    }else if(this.tables.length<6) this.solve();
    else console.log('no optimal solution')
  }

  isFinal(){
    let c=this.arr[this.nCon];
    //console.log(c,c.every((e,i)=>i&&e<=0));
    return c.every((e,i)=>e<=0);
  }

  save(){
    this.o=this.ar2O(this.arr);
    this.tables.push(this.o);
  }

  ar2O(arr){
    return arr.reduce((ac,e,i)=>
      {
        let indx=i!=arr.length-1?'x'+(i+3):'z';
        //if(this.pvJ&&i==this.pvI)indx='x'+this.pvJ;
        if(this.S[i])indx='x'+this.S[i];
        ac[indx]=new line(e);return ac}
    ,{});
  }

  show(obj=this.o){
    //console.log(obj)
    console.table(obj);
  }
  showAll(){
    this.tables.forEach((e,i)=>{console.log(i+1),console.table(e)});
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

function n(n){
  //console.log(n.toFixed(2),Number(n.toFixed(2)))
  return Number(n.toFixed(2));
}



module.exports=Table;