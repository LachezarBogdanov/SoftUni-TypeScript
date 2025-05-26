enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function reversedDayOfTheWeek (dayOfWeek: string) : void {
    const dayNum = Days[dayOfWeek as keyof typeof Days] || 'error';

    console.log(dayNum);
    
}

reversedDayOfTheWeek('Friday');