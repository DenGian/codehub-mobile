import {format, parseISO} from "date-fns";

export const formatDate = (dateString: string, dateFormat: string = 'yyyy-MM-dd'): string => {
    return format(parseISO(dateString), dateFormat);
};