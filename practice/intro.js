class Cat{
    constructor(name,color,age,sleeping){
    this.name = name;
    this.color = color;
    this.age = age;
    this.sleeping = sleeping;
    }

    isSleeping(sleeping){
        if(sleeping){
            return(this.name+' is sleeping');
        }
        else{
            return(this.name+' is awake');
        }
    };
}


let cat1 = new Cat('tom','navy blue',3,true);
let cat2 = new Cat('billy','black',6,false);

console.log(cat2.name);
console.log(cat2.isSleeping());
