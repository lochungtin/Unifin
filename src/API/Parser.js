import moment from 'moment';

import { accent, recordItem, white } from "../styles";
import { mergeSort } from "./MergeSort";
import { mix } from './Mixer';

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

    var keys = Object.keys(cats);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var alpha = (keys.length - i) / keys.length;
        rt.push({ percentage: cats[key] / records.length * 100, color: mix(accent, white, alpha) });
    }

    return rt;
}

export const parseAll = records => {
    return mergeSort([...records]);
}

export const getMonthly = records => {
    var total = 0;
    records.forEach(record => {
        if (moment(record.timestamp).month() === moment().month())
            total += record.amount;
    });
    return total;
}

export const getSectors = records => {
    var rt = [];
    var cats = {};

    for (const record of records) {
        var cat = record.merchant.category;
        if (!Object.keys(cats).includes(cat))
            cats[cat] = 1;
        else
            cats[cat]++;
    }

    var keys = Object.keys(cats);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var alpha = (keys.length - i) / keys.length;
        rt.push({ category: key, color: mix(accent, white, alpha) });
    }

    return rt;
}