import {formatDate} from "@/utils/formatDate";

interface Event {
    metaData?: {
        date?: string;
    };
}

interface MarkedDates {
    [date: string]: {
        marked?: boolean;
        selected?: boolean;
        selectedColor?: string;
    };
}

export const markDates = (events: Event[] | undefined, selectedDate: string, selectedColor: string = '#89CFF0'): MarkedDates => {
    const markedDates: MarkedDates = {};

    events?.forEach(event => {
        if (event.metaData?.date) {
            const formattedDate = formatDate(event.metaData.date);
            markedDates[formattedDate] = {marked: true};
        }
    });

    if (selectedDate) {
        markedDates[selectedDate] = {
            selected: true,
            marked: !!events?.find(event => event.metaData?.date && formatDate(event.metaData.date) === selectedDate),
            selectedColor,
        };
    }

    return markedDates;
};
