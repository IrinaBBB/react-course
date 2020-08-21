const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];

const nameCourse = 'Базовый React';
const command = [];

employers.forEach((name) => {
  if (name.length > 0 && name.trim() != '') {
    command.push(name);
  }
});

console.log(command);

command.forEach((name, index) => {
  name = name.toLowerCase().trim();
  name = name[0].toUpperCase() + name.slice(1);
  command[index] = name;
}); 

console.log(command);

const data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase']
};

const calcCash = (own = 0, ...args) => {
  let total = own;
  args[0].forEach(item => {
    total += item;
  }); 
  return total;
};

let lesson = calcCash(null, data.cash);
console.log(data.cash);
console.log(lesson);

const makeBusiness = ((director, teacher = 'Максим', allModule, gang, course) => {
  const sumTech = `${data.react.join(" ")} ${data.add.join(" ")} и другие`;
console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`);
  console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
  console.log('Технологии которые мы изучим: ');
  console.log(sumTech);
});

makeBusiness(...['Артем', , lesson, command, nameCourse]);



