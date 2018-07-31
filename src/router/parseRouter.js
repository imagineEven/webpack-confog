import { homeChildren } from './router.js';
// import router from './router.js';
console.log(homeChildren);
//console.log(router);
// 循环数组 得到去重的数组
let noRepetArr = [];
homeChildren.forEach(item => {
  if (noRepetArr.indexOf(item.groupName) === -1) {
    noRepetArr.push(item.groupName);
  }
});
console.log(noRepetArr);
// [item: [], item: []];
let parsedDate = [];
noRepetArr.forEach(item => {
  let obj = {};
  obj.name = item;
  obj.detail = [];
  parsedDate.push(obj);
});

homeChildren.forEach(homeItem => {
  for (let DateItem of parsedDate) {
    if (homeItem.groupName === DateItem.name) {
      homeItem.meta.path = homeItem.path;
      DateItem.detail.push(homeItem.meta);
    }
  }
});
console.log(parsedDate);
export {
  parsedDate
};