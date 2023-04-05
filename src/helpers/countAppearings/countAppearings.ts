export const countAppearings = <T extends string | number | boolean>(arr: T[]): { [key: string]: number } => {

  const obj = {} as { [key: string]: number };

  for (let value of arr) {
    if (obj[value.toString()]) obj[value.toString()]++;
    else obj[value.toString()] = 1;
  }

  return obj;
}