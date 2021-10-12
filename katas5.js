//KATAS 1

const testeReverseString1=()=> {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 const testeReverseString2=()=> {
    let result = reverseString("Q2 está chegando");
    let expected = "odnagehc átse 2Q";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

const reverseString=string=> string.split('').reverse().join('')

testeReverseString1()
testeReverseString2()

//KATAS 2

const testReverseSentence1=()=>{
    let result = reverseSentence("amanhã será um novo dia");
    let expected = "dia novo um será amanhã"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testReverseSentence2=()=>{
    let result = reverseSentence("hasta la vista baby");
    let expected = "baby vista la hasta"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const reverseSentence = setence => setence.split(" ").reverse().join(" ")

testReverseSentence1()
testReverseSentence2()

//KATAS 3

const testMinimumValue1 = () => {
    let result = minimumValue([-1,5,10,3,-5,7]);
    let expected = -5;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testMinimumValue2 = () => {
    let result = minimumValue([8,9,2,7,15]);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const minimumValue = array => array.reduce((a,b)=> b<a?b:a)

testMinimumValue1()
testMinimumValue2()

//KATAS 4

const testMaximumValue1 = () => {
    let result = maximumValue([-1,5,10,3,-5,7]);
    let expected = 10;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testMaximumValue2 = () => {
    let result = maximumValue([8,9,2,7,15]);
    let expected = 15;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const maximumValue = array => array.reduce((a,b)=> b>a?b:a)

testMaximumValue1()
testMaximumValue2()

//KATAS 5

const testCalculateRemainder1 = () => {
    let result = calculateRemainder(5,2);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testCalculateRemainder2 = () => {
    let result = calculateRemainder(15,3);
    let expected = 0;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const calculateRemainder = (numerador,denominador) => numerador % denominador

testCalculateRemainder1()
testCalculateRemainder2()

//KATAS 6

const testDistinctValues1 = () => {
    let result = JSON.stringify(distinctValues([1,3,5,3,7,3,1,1,5]));
    let expected = "[1,3,5,7]";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testDistinctValues2 = () => {
    let result = JSON.stringify(distinctValues([5,22,5,7,9,9,5,6,-1]));
    let expected = "[-1,5,6,7,9,22]";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const distinctValues = array => array.sort((a,b)=>a-b).filter((e,i,arr)=>arr.indexOf(e)===i)
testDistinctValues1()
testDistinctValues2()

//KATAS 7

const testCountValues1 = () => {
    let result = countValues([1,3,5,3,7,3,1,1,5]);
    let expected = "1(3)3(3)5(2)7(1)";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const testCountValues2 = () => {
    let result = countValues([5,22,5,7,9,9,5,6,-1]);
    let expected = "-1(1)5(3)6(1)7(1)9(2)22(1)";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

const countValues = array => distinctValues(array).map((a)=>`${a}(${array.reduce((count,e)=>e===a?count+1:count,0)})`).join('')
testCountValues1()
testCountValues2()

//KATAS 8

const testEvaluateExpression1 = () => {
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 const testEvaluateExpression2 = () => {
    let result = evaluateExpression("a * b - c * d", {a: 2, b: -3, c: 9, d: 25});
    let expected = -231
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 const evaluateExpression = (expression,values) => eval(expression.split(' ').reduce((string,e)=>values.hasOwnProperty(e)?string+values[e]:string+e,""))

 testEvaluateExpression1()
 testEvaluateExpression2()