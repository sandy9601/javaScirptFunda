

function slow(x){
    console.log(`called with ${x}`)
    return x;
}

//slow(1)

function cachingDecorator(func){
    let cache= new Map()
    return function(x){
        if(cache.has(x)){
            return cache.get(x)
        }
        let result=func(x)
        cache.set(x,result)
        return result
    }
}

slow=cachingDecorator(slow)
console.log(slow(1))
console.log(slow(1))
console.log(slow(1))
