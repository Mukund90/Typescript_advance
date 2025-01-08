interface user {
    name : string,
    age : number
}

const sum_of_age = (user1:user,bucket: user)=>
{
   return user1.age + bucket.age 
}

// const hero = {
//     name : "mukund jha",
//     age :18
// }
// const kuchbhi={
//     name :"mohan",
//     age : 12
// }

// const heroine = sum_of_age({name : "mukundjha",age: 12},{name : "mukund jha",age:20});
// console.log(heroine);


//pick properties in typescript

interface user {
    name : string,
    age : number,
    id : number,
    branch : string
}

type getinfo = Pick<user,'name' | 'branch'|'id'>

const get_data_student = (hello :getinfo)=>
{
   console.log('name: '+hello.name);
   console.log('branch'+ hello.branch);
   console.log('id'+hello.id)
}
//picking some specific properties from user.

const publicprofile : getinfo ={
    name : "mukund jha",
    branch : "CSE-IT",
    id : 2
}

get_data_student(publicprofile);

//partial 

interface Task {
    title : string,
    description:string,
    completed: Boolean
}

type Todos = Pick<Task ,'completed' | 'description'>
type Todos_partial =Partial<Todos>

const get_partial = (data :Todos_partial)=>
{
   console.log('empty data '+ data.completed);
   console.log('no required arg'+ data.description);


}

const dummy_data : Todos_partial={
 //not initalize anything bcz it take optional
}

get_partial(dummy_data);


interface contact {
    phone : string,
    address:{
        street : string,
        pincode : number
    }
}

type get_data = Pick<contact ,'phone'>&{
  address: Pick<contact['address'] , 'street'>
}

const use_data = (data:contact)=>
{
   console.log('phone number'+ data.phone);
   console.log('street '+ data.address.street);
   console.log('pincode'+ data.address.pincode);
}

const dummy_data_user : contact = {
   phone : "9326733344247",
   address:{
    street:"hello maidaan",
    pincode : 400101
   }
}

use_data (dummy_data_user)

//omit

interface classroom{
    students : number,
    cource : string,
    Teacher : number,
    enrolled: ()=>number,
    admission : number
};

type getauthenticData = Omit<classroom ,'Teacher' | 'cource'>

const Total_enrolled = (data : getauthenticData)=>
{
    console.log('No of students : ' + data.students);
    console.log('No of students admission taken: '+ data.admission);
    console.log('Total enrolled students in the college is : '+  data.enrolled());
}

const fake_data : getauthenticData={
    students : 600,
    admission:400,
     enrolled() {
         return (this.students) - (this.admission)
     },
    
}

let log = Total_enrolled(fake_data)
console.log(log) //function call


type useri = {
    readonly name : string,
   readonly user_data : string  //when it is readonly we cannot assigned the data ....
}

/*we can also make object readonly 
const obj = readonly <obj> ={
name : "mukund jha",
age : 90
}
*/


const metadata : useri={
    name : "mukund jha",
    user_data : "i ma mukund jha"
}

// metadata.user_data = "i am rohit jha";
console.log(metadata)

// interface user8 {
//     [key:number] : {name : string}
// }

type name= Record<number ,{name : string,age:number}>

const authuser :name={
    1 : {name : "mukund jha",age:23}
}

console.log(authuser)


type course = "mathematicsOneshot" | "physics oneshot" | "jee marathon";

interface courceinfo {
    Professors : string,
    students : number
}

type university = Record<course,courceinfo>

const courcestore : university={
   "jee marathon" : {
      Professors : "vk mehta",
      students : 20,
   },
   "mathematicsOneshot":{
         Professors:"mukund jha",
         students:89
   }, 
   "physics oneshot": {
         Professors:"hina roy",
         students : 90,
   }
}

let array = Object.values(courcestore);

let value = array.filter(item=> item.students > 50)

let result =value.map((item)=>
{
    return {
        professor:item.Professors,
        students : item.students
    }
})
console.log(result)

//map 
const user_data = new Map() //creating a map;
user_data.set("uidxy","mukund jha")
user_data.set(2,"mohit yadav")
user_data.set(true,'is it raining?')


 interface nano {
    length : number,
    data : boolean
 }

 const data : nano= {
    length : user_data.size,
    data : user_data.has(true)
 }

function getvalue (data1 : nano)
{
  console.log('data length: '+data1.length);
  console.log('is it exits in  data :'+data1.data)
}

getvalue(data);

