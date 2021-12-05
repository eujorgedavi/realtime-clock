export interface WorldClock {
    $id: string,
    currentDateTime: string,
    utcOffset: string,
    isDayLightSavingsTime: boolean,
    dayOfTheWeek: string,
    timeZoneName: string,
    currentFileTime: number,
    ordinalDate: string,
    serviceResponse: any;
}