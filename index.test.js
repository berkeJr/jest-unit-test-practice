// index.js'deki sum fonksiyonuna erişelim:
const {sum} = require('./index.js');


it('should return some of two numbers', () => {
    // arrange 
    const num1 = 4;
    const num2 = 5;

    // act
    const result = sum(num1, num2); 

    // assertion 
    expect(result).toBe(9);  // PASS: Başarılı Test 
})

