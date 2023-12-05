import {linearCongruentialGenerator} from "../../helpers/randomGenerator";

export function generateData(count: number) {
  let i;
  const surnames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Anderson', 'Harris', 'Clark', 'Allen', 'Scott', 'Carter'];
  const names = ['James', 'John', 'Robert', 'Christopher', 'George', 'Mary', 'Nancy', 'Sandra', 'Michelle', 'Betty'];
  const gender = ['Male', 'Female'];
  const items = [];
  const startBirthDate = Date.parse('1/1/1975');
  const endBirthDate = Date.parse('1/1/1992');

  for (i = 0; i < count; i += 1) {

    const birthDate = new Date(startBirthDate + Math.floor(
      (linearCongruentialGenerator() * (endBirthDate - startBirthDate)) / 10,
    ));
    birthDate.setHours(12);

    const nameIndex = linearCongruentialGenerator();

    const item = {
      id: i + 1,
      firstName: names[nameIndex],
      lastName: surnames[linearCongruentialGenerator()],
      gender: gender[Math.floor(nameIndex / 5)],
      birthDate,
    };
    items.push(item);
  }
  return items;
}