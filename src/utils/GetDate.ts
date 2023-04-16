import {changeNumToString} from './changeNumToString';

export class GetDate {
  static getDateString = (date: number) => {
    const d = new Date(date);

    return `${changeNumToString(d.getDate())}/${changeNumToString(
      d.getMonth() + 1,
    )}/${d.getFullYear()}`;
  };
}
