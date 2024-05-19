const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

const m = 3;
const n = 3;

function merge(nums1, m, nums2, n) {
    const newArray = nums1.slice(0, m).concat(nums2);

    for (let i = 0; i < (m+n); i++) {
        if (newArray[i] > newArray[i + 1]) {
            var temp = newArray[i];
            newArray[i] = newArray[i + 1];
            newArray[i + 1] = temp;
        }
    }

    for (let i = 0; i < newArray.length; i++) {
        nums1[i] = newArray[i];
    }

    console.log(nums1);
};

merge(nums1, m, nums2, n);