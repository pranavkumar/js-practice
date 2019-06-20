



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
    while (i < m) {
        c[k] = a[i];
        i++;
    }
    while (j < n) {
        c[k] = b[j];
        j++;
    }

    return c;
}

console.log(mergeTwoSortedArrays(a, b));

