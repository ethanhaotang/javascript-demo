import _, { cloneWith } from 'lodash'

console.log('hello world');
console.clear();
console.log('======');
console.log('hello world 2');
console.log('=======');

{
  const object={}
  const array=[]

let a =1
let b =2
b=2
console.log(a,b);

  const person ={
    name:'ethan',
    age:18,
income:0
  }

  const person2=person
  person2.age= 30
  console.log(person,'\n',person2);
  person.income=100
  console.log(person,'\n',person2);
 
  const person3={...person}
  console.log(person3);
  person3.age=50
  console.log(person,'\n',person3);
}
{
  console.clear();

  const person = {

  name: "Raymond",

  age: 18,

  profile: {

    account: [

      {

        id: 1,

        income: 0,

      },

      {

        id: 2,

        income: 100,

      }

    ]

  }

}

const person3={...person}
person3.profile.account[0].income=1000

console.log(person);

const person4=_.cloneDeep(person)
console.clear();
console.log(person4);
person4.profile.account[0].income=5000
console.clear();
console.log(person);
console.log(person4);
}
{
 console.clear();
 const target={a:1,b:2}
 const source={b:4,c:5}

 const returnTarget = Object.assign(target,source)
 console.log(returnTarget);
 console.log(target);

}
{
  console.clear();
  const target={a:1,b:2}
  const source={b:4,c:5}

  const combineTarget={...target,...source}
  console.log(combineTarget);
  console.log(target);
}
console.clear();
{
  const user={
    name:'ethan',
    age:18,
profile:{
  address:'xx.xxx.xxx',
  email:'yy.yyy.yy'
},
draw:function(){
  console.log(this.name);
}
  }
  console.log(user.name);
  user.draw()

  const newUser=Object.create(user)
  console.log(user);
  console.log(newUser);
  newUser.draw()

  console.log(Object.hasOwn(user,'name'));

console.log(user.hasOwnProperty('name'));
console.log(user.hasOwnProperty('toString'));
console.log(user.isPrototypeOf(newUser));

}
{
  console.clear();
  const user={
name:'ethan'
  }
console.log(user);
user.age=18
console.log(user);
delete user.age
console.log(user);

Object.isExtensible(user)
console.log(Object.isExtensible(user));

Object.preventExtensions(user);
console.log(Object.isExtensible(user));

// user.ege=30
console.log(user);


}

{
  console.clear();
  const user ={
name:'ethan',
age:18
}

Object.seal(user)
console.log(Object.isExtensible(user));

const newUser=_.cloneDeep(user)
console.log(newUser);
console.log(Object.isExtensible(newUser));
}


{
  const name='ethan   tang'
  const arrayName=Array.from(name)
  console.log(arrayName);
  console.log(arrayName.toString());

  function draw(){

  }

const newArrayName= arrayName.filter(element =>{console.log(element);} )

const newArrayName3= arrayName.filter(element => element !=' ')
console.log(newArrayName3);

console.log(typeof arrayName);
console.log(Array.isArray(name));
console.log(Array.isArray(arrayName));
console.log(arrayName.join(''));
console.log(arrayName.join(' '));
console.log(arrayName.join('_'));
}

{
  const array1=['a','b','c']
  const array2=['d','e','f']

  const array3= array1.concat(array2)
  console.log(array3);

  const array4=[...array1,...array2]
  console.log(array4);
}
{

  const array1 = [5, 12, 8, 130, 71, 55]
  const found= array1.find(element =>element >40)
  console.log(found);
  const index=array1.findIndex(element =>element >40)
  console.log(index);
 
  const foundLast=array1.findLast(element => element>40)
  console.log(foundLast);

  const filter=array1.filter(element => element>40)
  console.log(filter);
 
 
  const newMap=array1.map(element => element*10)
console.log(newMap);

}
{
  console.clear();
  const list = [1, 2, [3, 4, 5, [6, [7, 8, 9]]]]
  console.log(list);
  const newList=list.flat()
  console.log(newList);
  const newList4=list.flat(3)
  console.log(newList4);
  const newList5=list.flat(Infinity)
  console.log(newList5);
}
{
  const list=['A','B','C']
  let iter=list.keys()
  console.log(iter.next().value);
  console.log(iter.next().value);

   
  iter=list.values()
  console.log(iter.next().value);
  console.log(iter.next().value);
}

{
  console.clear();
  const list=['A','B','C']
  list.push('D')
  console.log(list);
  list.pop()
  console.log(list);
  
list.shift()
console.log(list);
list.unshift('1')
console.log(list);
}
{
 
  const list = [374, 435, 23, 343, 7843, 85]
  
  const newList=list.sort((a,b)=>a-b)
  console.log(newList);

  const list2 = [374, 435,'age', 23, 343, 'name',7843, 85]
  
  const newList2=[...list.sort((a,b)=>a-b)]
  console.log(newList2);
}