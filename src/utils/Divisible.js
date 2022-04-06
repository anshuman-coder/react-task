export const isDivisible = (num) => {

  let i = Number(num);

  if(i % 2 === 0 && i % 3 === 0) {
    return Number(6);
  } else if(i % 2 === 0) {
    return Number(2);
  } else if (i % 3 === 0) {
    return Number(3);
  }
}  
