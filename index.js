// run `node index.js` in the terminal
const students=[
  {
    name:"Ganeesh",
    cmarks:89,
    bmarks:90,
    dob:"09-07-1998",
  },
  {
    name:"Rakesh",
    cmarks:79,
    bmarks:70,
    dob:"29-07-1994",
  },
  {
    name:"Ramesh",
    cmarks:89,
    bmarks:90,
    dob:"19-06-1998",
  },
  {
    name:"suresh",
    cmarks:99,
    bmarks:90,
    dob:"19-06-1997",
  }
];

students.sort((a,b)=>{
//sortbytotalmarks
if (a.cmarks+a.bmarks >b.cmarks+b.bmarks) {
  return -1;

} else if (a.cmarks+a.bmarks < b.cmarks+b.bmarks) {
  return 1;
}
//sortbybiologymarks
if (a.bmarks >b.bmarks) {
  return -1;

} else if (a.bmarks < b.bmarks) {
  return 1;
}
//sortbychemistrymarks
if (a.cmarks >b.cmarks) {
  return -1;

} else if (a.cmarks < b.cmarks) {
  return 1;
}

//sortbydob
const [day1,month1,year1]=a.dob.split("-");
const [day2,month2,year2]=b.dob.split("-");
const data1 = new Date(year1,month1 -1,day1);
const data2 = new Date(year2,month2 -1,day2);

if (data1 >data2) {
  return -1

} else if (data1<data2) {
  return 1

}

return 0;

});
console.log(students)
console.log(`Hello Node.js v${process.versions.node}!`);
