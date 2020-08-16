// Template Literal or string
let incri = 1;
let year = 2000 + incri;
let Person = 100;
let subPerson = 0;
if (year + incri) {
  subPerson += incri;
  console.log(subPerson);
}
let remaingPerson = Person - subPerson;

function budget(Str, ...rest) {
  if (remaingPerson === 0) {
    Str[3] = 'notething'; 
  }
  return `${Str[0]} ${rest[0]} ${Str[1]} ${rest[1]} ${Str[2]} ${rest[2]} ${Str[3]}`;
}
document.write(
  budget`this new budget of Indian if year ${year} so we give subsidy , only ${subPerson}% person but remaing for person ${remaingPerson}% we not able take service`
);
