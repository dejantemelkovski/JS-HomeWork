let studensNames = ['1.Kire', '2.Pere', '3.Kole', '4.Stojna'];
let studentsLastnames = ['Peov', 'Peovski', 'Peovic', 'Peovich'];

let namesLastnames = studensNames.map((e, i) => [e + (" ") + studentsLastnames[i]]);

console.log(namesLastnames);