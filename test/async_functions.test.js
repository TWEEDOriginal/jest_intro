const async_functions = require('../scripts/async_functions');

test('Users name should be Leanne Graham', () => {
   
    return async_functions.get_user('https://jsonplaceholder.typicode.com/users/1').then(data => {
        expect(data.name).toEqual('Leanne Graham');
      })

  });

  test('the fetch fails with an error', () => {
    expect.assertions(1);
    return async_functions.get_user('https://google.com/admin').then(e => expect(e).toMatch('errorrrrr'));
  });

// async/ AWAIT

test('Users name should be Leanne Graham with async await', async () => {
    const data = await async_functions.get_user('https://jsonplaceholder.typicode.com/users/1');
    expect(data.name).toEqual('Leanne Graham');
      
});  