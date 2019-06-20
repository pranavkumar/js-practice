



let a = [12, 13, 56, 90];
let b = [7, 8, 10, 19, 34];

function mergeTwoSortedArrays(a, b) {
    let m = a.length;
    let n = b.length;
    let i = 0;
    let j = 0;
    let k = 0;
    let c = [];
    while (i < m && j < n) {
        // console.log(i);
        // console.log(j);
        if (a[i] < b[j]) {
            c[k] = a[i];
            i++;
            k++;
        } else {
            c[k] = b[j];
            j++;
            k++;
        }

    }
    console.log("here");
    console.log(i);
    console.log(m);
    while (i < m) {
        c[k] = a[i];
        i++;
    }
    console.log("there");
    while (j < n) {
        c[k] = b[j];
        j++;
    }

    return c;
}

console.log(mergeTwoSortedArrays(a, b));

