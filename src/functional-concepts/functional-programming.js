const users = [
    {
        name: "Janusz",
        age: 41,
        profession: "Hydraulik"
    },
    {
        name: "Kazimiera",
        age: 25,
        profession: "Senior HR"
    },
    {
        name: "Barbara",
        age: 35,
        profession: "Programistka"
    },
    {
        name: "Zbyszek",
        age: 55,
        prefession: "Kierowca"
    }
];

/*
Przekształcić podaną tablice użytkowników na tablice imion tylko dla kobiet pisanymi drukowanymi literami,
używali tych funkcji
tj. ['KAZIMIERA', 'BARBARA']
 */

const womenNames = users.map(({name}) => {
    if (['Kazimiera', 'Barbara'].includes(name)) {
        return name.toUpperCase();
    }
}).filter((e) => !!e);
console.log(!!true);
console.log(womenNames);

