//1.


//1st method---------------
let data={
    name:"Monisha",
    Address:{
        door:15,
        street:"North street",
        village:"Agarakattu"
    }
}

let data1={...data,Address:{door:"1/3",street:"kamarajar street",village:"virudhunagar"}};


// console.log(data)
console.log(data1);

//2nd method----------------

let data2={
    name:"Monisha",
    Address:{
        door:15,
        street:"North street",
        village:"Agarakattu"
    }
}
let data3=JSON.parse(JSON.stringify(data2));

data3.Address.door="1/3";
data3.Address.street='Kamarajar street';
data3.Address.village='Virudhunagar';

console.log(data3);

//3rd method-------------------------

let data4={
    name:"Monisha",
    Address:{
        door:15,
        street:"North street",
        village:"Agarakattu"
    }
}

let data5=Object.assign({},data4);
data5.Address={door:"1/3",street:"kamarajar street",village:"virudhunagar"}


console.log(data4)
console.log(data5);






//------------------------------------------------------------------------------------------------------------



//2.add type:"fruits"

let fruits = [{name: "Apple",
            weight: "1Kg",
            price:280
            },
            {name: "Orange",
            weight: "1Kg",
            price:180},
            {name: "Pomegranate",
            weight: "1Kg",
            price:250}
        ]

        let res=fruits.map((val)=>{
            return{...val,type:"Fruits"}
        })
        console.log(res);

//----------------------------------------------------------------------------------------------------


//3.print names

let mathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];

 let emp=mathScore.map((val)=>{
    return val[0];
}
)
console.log(emp);


//--------------------------------------------------------------------------------------------------

//4.

let score = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];

let name=score.filter((val)=>{
    if(val[3]=="A")
    return val[0];
})

let empt=name.map((val)=>{
    return val[0];
})

console.log(empt);

//-----------------------------------------------------------------------------------------------

//5.

const names =["Ananth","Arun","Vellasamy","Ranjith"];

names.forEach((val,i)=>{
    console.log("Rollno "+(i+1)+":"+val)
})

//-----------------------------------------------------------------------------------------------

//6.

let num1 = [1,2,3]
let num2= [4,5,6]

let num=[...num1,...num2];
console.log(num);


//----------------------------------------------------------------------------------------------

//7.
const obj1={a:1,b:2}
const obj2 = {b:3,c:4}

let obj3={...obj1,...obj2};


console.log(obj3);

//-----------------------------------------------------------------------------------------------------

//8.

var employee =[{
    name : "Karuppasamy",
    age : 24,
    Salary : 25000,
    level : "junior"
    },
    {
    name : "Samy",
    age : 21,
    Salary : 20000,
    level : "junior"
    },{
    name : "Kaviya",
    age : 22,
    Salary : 18000,
    level : "junior"
    },{
    name : "Naresh",
    age : 45,
    Salary : 100000,
    level : "senior"
    },{
    name : "Prem",
    age : 24,
    Salary : 50000,
    level : "senior"
    }];

    let empName=employee.filter((val)=>{
        return val.Salary>=50000
    })

    
    let empNames=empName.map((val)=>{
        return val.name;
    })

    console.log(empNames);

//------------------------------------------------------------------------------------------

//9.

let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];


  
  let addnames=users.map((val)=>{
    
   let addname= val.firstName+val.lastName;
    return addname;
    
  })
  
console.log(addnames);
  //------------------------------------------------------------------------------------------------

  //10.how to avoid shallow copy

  let arr1 = ['one', 'two'];
  let arr2 = [...arr1, 'three', 'four', 'five'];
  
  console.log(arr2); 


  let a={val1:5,val2:1};
  let b=JSON.parse(JSON.stringify(a));

  b.val1=6;
  a.val3=9
  console.log(a);
  console.log(b)


  let x=["hi","hello"];
  let y=Object.assign([],x)

  y.push("welcome");
  console.log(y);
  console.log(x);

  

  



  
    

