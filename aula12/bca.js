let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

//solução 1
let varAuxi = varA;
varA = varB;
varB = varC;
varC = varAuxi;

//solução 2
[varA, varB, varC] = [varB, varC, varA];


console.log(varA, varB, varC);