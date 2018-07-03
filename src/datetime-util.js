import moment from 'moment';
import 'twix';
import 'moment-duration-format';

class DateTimeUtil {

  static getSecondsDef() {
    return {
      WEEK: 60 * 60 * 24 * 7,
      DAY: 60 * 60 * 24,
      HOUR: 60 * 60,
      MINUTE: 60
    };
  }

  static isValid(dateTime) {
    let m = moment(dateTime);
    return m.isValid() ? m : false;
  }

  static now() {
    return moment();
  }

  static toDate(string) {
    return moment(string);
  }

  static format(seconds, format) {
    return moment.duration(seconds, "seconds").format(format);
  }

  static getInterval(start, end) {
    if (DateTimeUtil.isValid(start) && DateTimeUtil.isValid(end)) {
      return moment(start).twix(moment(end)).count("seconds");
    } else {
      return undefined;
    }
  }

}

export default DateTimeUtil;
