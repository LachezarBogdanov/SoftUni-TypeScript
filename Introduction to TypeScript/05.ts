function summarizePerson(id: number,
    firstName: string,
    lastName: string,
    age: number,
    middleName?: string,
    hobbies?: string[],
    workInfo?: [string, number],
) : [
    number,
    string,
    number,
    string,
    string
] {

    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const personHobbies = hobbies ? hobbies.join(', ') : '-';
    const personJobInfo = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-'
    
    return [
        id,
        fullName,
        age,
        personHobbies,
        personJobInfo,
    ]
}

console.log(summarizePerson(21, 'Kristine', 'Neva', 23, ''));
