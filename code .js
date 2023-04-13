


function output(){
    //take input from documnet.getelementbyid value as value of a
   let a= "9391405720";
   let sum=0
   let d;
    for (let names of a){
       sum+=Number(names)
    }
    for (let i=1;i<sum;i++){
        if(i%4==0 && i%5==0){
           d+=" FizzBuzz"
        }
        else if(i%4==0){
            d+=" Fizz"
        }
        else if(i%5==0){
           d+=" Buzz"
        }
        else{
            d+=" "+i
        }
    }
  
   console.log(d)
}
output()
