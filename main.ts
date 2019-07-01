
//typescript code here...//

let firstVariable:string = "helloWorldChange";
console.log(firstVariable);
document.write(firstVariable);


//declaring the string variables//

 let someOne:string = "sunil KR";
 let otherName:string = "yogita DD";
 
 //declaring the number date types//
 let datebirth:number = 5-5-1993;
 let dateOfBirth:number = 16-5-1993;

 //declaring the boolean date types//

 let isItLove:boolean  = false;
 let istLove:boolean  = true;

 // declaring array date types//
  let long:string[] = ["jan","feb","mar"];
  let dateWise:number[] = [10,20,30];

//declaring tuple //
//let x = [string,number];
let x = ["string",100];


// declaring datetype any//

let iCanDeclareany:any;
iCanDeclareany = 5593;
iCanDeclareany = "yosu";
iCanDeclareany = true;
iCanDeclareany = ["very",143,false];



//Functions typescript//
let add = (x:number,y:number):number=>{
    return x / y;

  }
  console.log(add(10,20));



  //optional parameter//

  let optionalPara = (x:number,y?:number)=>{
      if(y){
          return x*y;
      }
      else{
          return x*x;
      }

  }
  console.log(optionalPara(10));


  //REST operator//

  let party = (...school:string[])=>{
        console.log(school)
      
  }
   party("mmm","nnn","ooo");