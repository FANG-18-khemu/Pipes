import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pcustom'
})
export class PcustomPipe implements PipeTransform {

  transform(teacher:any,stext:string): any {
   if(stext === ""){
    return teacher;
   }
   return teacher.filter((t:any)=> t.name.toUpperCase() === stext.toUpperCase());
  } 

}
