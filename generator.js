


function* genkeys(max) {
    yield 1;
    yield 2;
    return 3;
    yield 4;
}

const gen = genkeys(10);

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


function* g1() {
    yield 10;
    yield 11;
    yield 12;
}

function* g2() {
    yield 1;
    yield 2;
    yield* g1();
    yield 3;
}

let it = g2();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());



