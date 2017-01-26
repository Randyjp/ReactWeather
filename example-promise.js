// function getTempCallBack (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallBack('Philadelphia', function (err, temp) {
//   if (err) {
//     console.error('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found')
//     }, 1000);
//   });
// }
//
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Promise error', err);
// });

//challenge area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a and b should be numbers');
    }
  });
}

addPromise(1).then(function (sum) {
  console.log('Promise success', sum);
}, function (err) {
  console.log('Promise error', err);
});
// addPromise('sdfdfsdfdsfsdfsd');
// addPromise(2);
