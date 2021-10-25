let x = 0

function recursion() {
    x += 1
    console.log(x);
    return recursion()
}

recursion()