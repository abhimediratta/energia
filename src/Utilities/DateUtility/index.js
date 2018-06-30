import { format } from 'date-fns';

export function formatDateRange(startDate, endDate) {
  if(!endDate) {
    return format(startDate, 'D MMM, YYYY (ddd)');
  } else {
    return `${format(startDate, 'D')} - ${format(endDate, 'D MMM, YYYY')} (${format(startDate, 'ddd')} - ${format(endDate, 'ddd')})` ;
  }
}