let i, n=5, sum=0;
  arr = new Array(4, 12, 33, 5, 21);
  for(i=0; i<5; i++)
    sum = sum + arr[i];
  document.write(`The sum of 4 + 12 + 33 + 5 + 21 is: ${sum}`);