// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const appendedCats = [...cats, name];
    return appendedCats;
}

function prependCat(name) {
    const prependedCats = [name, ...cats];
    return prependedCats;
}

function removeLastCat() {
    const lastCatRemoved = [...cats.slice(0, -1)];
    return lastCatRemoved;
}

function removeFirstCat() {
    const firstCatRemoved = [...cats.slice(1)];
    return firstCatRemoved;
}
