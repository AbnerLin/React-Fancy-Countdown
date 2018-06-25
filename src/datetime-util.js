import moment from 'moment';
import 'twix';
import 'moment-duration-format';

class DateTimeUtil {

  static isValid(dateTime) {
    let m = moment(dateTime);
    return m.isValid() ? m : undefined;
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
