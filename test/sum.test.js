const sum=require('../src/sum');

//call test function here

it('should return sum',()=>{
    const result=sum(2,5);
  expect(result).toBe(7);
})

