const Table=require('./table');
 arr=[
[4,1,0,1,0,0],
[12,0,2,0,1,0],
[18,3,2,0,0,1],
[0,300,500,0,0,0]
];

let A=[
  [1,0],
  [0,2],
  [3,2]
],
b=[4,12,18],
C=[300,500];
let T=new Table(C.length,b.length,C,A,b);

T.show();