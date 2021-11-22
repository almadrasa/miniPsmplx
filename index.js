const Table=require('./table');
var colors = require('colors');
console.log(colors.green.bold('created by '),colors.bold.inverse('hodayfa'))
console.log(colors.underline.strikethrough('___________________'))


let A=[
  [1,0],
  [0,2],
  [3,2]
],
b=[4,12,18],
C=[300,500];
let T=new Table(C.length,b.length,C,A,b);
console.log('exemple:');
console.log(colors.brightGreen('-input:'))
console.log(colors.brightGreen('C')+' = ',C.join('\t'))
console.log(colors.brightGreen('A')+' =',
  '\n'+A.map(l=>l.join('\t')).join('\n')
  )
console.log(colors.brightGreen('b')+' = ',b.join('\t'))
console.log(colors.brightGreen('-output:'))

//T.solve()
T.show();
//T.showAll();
const cmd=require('./cmd');
while(true)
  if(cmd())break;