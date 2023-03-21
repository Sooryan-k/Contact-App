import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //allContacts-array,searchKey-sreerag,propName-name
  transform(allContacts: any=[],searchKey: string,propName:string): any[] {
    const result:any=[]//transform output
    if(!allContacts||searchKey==''||propName==''){

      return allContacts
    }
    allContacts.forEach((contact:any) => {
      
      if(contact[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        //name sreerag ->sreerag.icnludes(sr)
        result.push(contact)
      }
    })

      return result;
  }
}
