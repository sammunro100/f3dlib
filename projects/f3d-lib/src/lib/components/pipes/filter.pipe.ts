import { Pipe, PipeTransform } from '@angular/core';
let keys = [
  'name', 'tumour'
]
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, labelKey?: string) {
    if (!items || !searchTerm) {
      return items;
    }

    // Todo replace this with arg
    const filterableKeys = ['name', 'tumour'];
    const returnObj = [];

    items.map(item => {
      for (const key of filterableKeys) {
        if (item[key].toLowerCase().includes(searchTerm.toLowerCase())) {
          const tempObj = {};
          tempObj[key] = item[key];
          returnObj.push(tempObj);
        }
      }
    });
    return returnObj;
  }
}

//   const getShortMessages = messages => messages
//   .filter(obj => obj.message && obj.message.length <= 50)
//   .map(obj => obj.message)



    // return items.map(item => {
    //   for (const key of filterableKeys) {
    //     if (item[key].toLowerCase().includes(searchTerm.toLowerCase())) {
    //       return item[key];
    //     }
    //   }
    // })

  //   items.filter(item => {
  //     for (const key of filterableKeys) {
  //       let x = key;
  //       if (item[key].toLowerCase().includes(searchTerm.toLowerCase())) {
  //         let test = {};
  //         test[x] = item[key];
  //         returnObj.push(test);
  //         return true;
  //       }
  //     }
  //     // console.log(returnObj);
  //     return returnObj;
  //   });

  //   return returnObj;
  // }