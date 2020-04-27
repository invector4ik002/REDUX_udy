/**
 * тоже переводим функцию reduser в отдельный файл ""
 * reduser меняет состояние по аналогие с хуком useState
 * @param {*} state state текущее состояние.
 * @param {*} action действие которое изменит текущее состояние.
 */
const reduser = (state = 0, action) => {// state текущее состояние. action действие которое изменит текущее состояние
   
   switch (action.type) {
      case 'INC':
         return state + 1;
      case 'DEC':
         return state - 1;
      case 'RND':
         return state + action.payload;
      default:
         return state;
   }
   // if (action.type === 'INC') { // вариант "if"
   //    return state + 1;
   // } else {
   //    return state;
   // }
};
export default reduser;