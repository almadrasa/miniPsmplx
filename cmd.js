var colors = require('colors');
const Table=require('./table');
var readlineSync = require('readline-sync');

const menu={
  clear:clr,
  exemple:exmple,
  run:calc,
}
const bg=colors.brightGreen;

function auth(){
  console.log(colors.green.bold('created by '),colors.bold.inverse('hodayfa'))
console.log(colors.underline.strikethrough('___________________'))
}
function clr(){
  console.clear();
  auth();
}
function input(){
  console.log(bg('-input:'))
}
function output(){
  console.log(bg('-output:'))
}
function exmple(){
  clr();
  let A=[
    [1,0],
    [0,2],
    [3,2]
  ],
  b=[4,12,18],
  C=[300,500];
  let T=new Table(C.length,b.length,C,A,b);
  console.log('exemple:');
  input();
  console.log(bg('C')+' = ',C.join('\t'))
  console.log(bg('A')+' =',
    '\n'+A.map(l=>l.join('\t')).join('\n')
    )
  console.log(bg('b')+' = ',b.join('\t'))
  output();
  T.show();
}
//  let index = readlineSync.keyInSelect(Object.keys(meny), 'option');

function calc(){
  input();
  let nc=Number(readlineSync.question('nombre de contrainte: ').trim());
  process.stdout.write(bg('C')+' = ')
  let t=readlineSync.question('');
  let C=t.trim().replace(/\s+/g,' ')
        .split(' ').map(e=>Number(e));

  let A=new Array(nc).fill([]);
  console.log(bg('A')+' =');
  for(let i in A){
    t=readlineSync.question('');
    A[i]=t.trim().replace(/\s+/g,' ')
          .split(' ').map(e=>Number(e));    
  }
  process.stdout.write(bg('b')+' = ')
  t=readlineSync.question('');
  let b=t.trim().replace(/\s+/g,' ')
        .split(' ').map(e=>Number(e));
  output();
  let T=new Table(C.length,b.length,C,A,b);
  T.solve();
}
function mn(){
  let index = readlineSync.keyInSelect(Object.keys(menu), 'option');
  if(index<0)return true;
  Object.values(menu)[index]();
}

module.exports=mn;