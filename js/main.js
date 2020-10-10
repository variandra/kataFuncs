function add (a,b){
    return(a+b);
}

function multiply(a,b){
    let i = 0;
    let c = 0;
    while(b > i){
        i=add(i,1);
        c = add(a,c);
    }
    return(c);
}

function power(a,b){
    let i = 0;
    let c = 1;
    while(b > i){
        i = add(i,1);
        c = multiply(a,c);
    }
    return(c);
}

function factorial(a){
    let b = 0;
    let c = a;
    let d = a;
    while(b < a){
        b=add(b,1);
        d=add(b,(-1));
        if(d>0){
            c = multiply(c,d);
        }
    }
    return(c)
}

function fibonacci(a){
    let fib = [];
    fib.push(0,1);
    while(a > fib.length-1){
        fib.push(add((fib[fib.length-2]),(fib[fib.length-1])));
    }
console.info(fib)
return(fib[a-1])
}
