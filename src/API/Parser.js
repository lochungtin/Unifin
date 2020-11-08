import { mergeSort } from "./MergeSort";

export const parsePie = records => {
    var rt = [];
    var cats = {};

    for (const record of records) {
        var cat = record.merchant.category;
        if (!Object.keys(cats).includes(cat))
            cats[cat] = 1;
        else
            cats[cat]++;
    }

    for (const key of Object.keys(cats)) {

        rt.push({ percentage: cats[key] / records.length * 100, color: "#555" });
    }

    console.log(rt);
    return rt;
}

export const parseAll = records => {
    return mergeSort([...records]);
}