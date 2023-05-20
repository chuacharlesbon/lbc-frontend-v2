import { MonthsFull } from "../constants/ConstantsData";

export function formatDate(value:any) {

    const date = new Date(value);
    const zero: any = '0';

    const year = date.getFullYear();
    const month = (date.getMonth() + 1);
    const newMonth = month > 9 ? month.toString() : zero.concat(month.toString());
    const day = date.getDate();
    const newDay = day > 9 ? day.toString() : zero.concat(day.toString());

    return MonthsFull[newMonth-1].concat(' ', newDay, ', ', year.toString());
};