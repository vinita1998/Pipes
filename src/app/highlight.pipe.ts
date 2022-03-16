import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
constructor(private Sanitizer:DomSanitizer){}
  transform(value: string, cityCode: string): any {
  if(cityCode ==='Uk'|| cityCode==='Ln'){
  
    return this.Sanitizer.bypassSecurityTrustHtml( '<div style="background-color:#ffffcc">'  +cityCode+ '</div>');
  }
  else{
    return this.Sanitizer.bypassSecurityTrustHtml( '<div style="background-color:lightgreen">'  +cityCode+ '</div>');

  }
}}
