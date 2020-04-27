// actionCreate акшен криейтеры
// перехали из целного файла. теперь нужно экспортировать export
export const inc = () => ({type: 'INC'}); // возвращаем в функцию объект тем самым сокращая название типа "INC" так как названия бывают очень большие 
export const dec = () => ({type: 'DEC'});
export const rnd = () => { // этот пример с payload полезной нагрузкой
   return {
      type: 'RND',
      payload: Math.floor(Math.random()*10),
   };
};