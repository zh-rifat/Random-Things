//reference: https://www.youtube.com/watch?v=NoUPIQobeLw

let arr=[10,20,30,40,50,60]
const log=console.log;

//this generator iterates over the elements of arr randomly
function* gen(){
    for(let i=0;i<0;i++){
        yield arr[Math.floor(Math.random()*5)];
    }
    
}
let iterator=gen();
let nxt=iterator.next();
log(nxt.done);
while(!nxt.done){
    log(nxt);
    nxt=iterator.next();
}

//now time to iterate over object;
let person={
    name:'ZH Rifat',
    email:"contact.zhrifat@gmail.com",
    phone:"+8801883219902"
}
    let i=-1;
    let done=false;
let it={[Symbol.iterator]:function(){
    
    return{
        next:()=>{
            if(i>=2){
                done=true;
            }
            switch(++i){
                case(0):
                    return {name:person.name,done:done};
                    // break;
                case(1):
                    return {email:person.email,done:done};
                    // break;
                case(2):
                    return {phone:person.phone,done:done};
                    // break;
                default:
                    return {value:undefined,done:done};
                    // break;
            }
        }
    }
}};
let data=it[Symbol.iterator]();
nxt=data.next();
log(nxt.done);
while(!nxt.done){
    log(nxt);
    nxt=data.next();
}

