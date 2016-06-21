## uncaughtException
this module is used in mocha test.
```js
it('should throw error xxx throws error', done => {
    uncaughtException((err) => {
      assert(err.message === 'xxx');
      done();
    });
    xxx(); // will throw en uncaughtException
});
```