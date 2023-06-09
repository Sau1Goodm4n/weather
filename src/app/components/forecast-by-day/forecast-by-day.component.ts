import { Component, Input } from '@angular/core';

import { ForecastDay } from '../../models/index';

import { ImgService } from '../../services/index';


@Component({
   selector: 'wth-forecast-by-day',
   templateUrl: './forecast-by-day.component.html',
   styleUrls: ['./forecast-by-day.component.scss']
})
export class ForecastByDayComponent {
   @Input() day!: ForecastDay;
   @Input() dayI!: number;

   constructor(private img: ImgService) { }



   public getDayName(i: number): string {
      switch (i) {
         case 0:
            return 'Today';
         case 1:
            return 'Tomorrow';
         case 2:
            return 'Day after tomorrow';
         default:
            return ''
      }
   }



   public show(i: number): boolean {
      return new Date().getHours() >= 23 && i === 0 ? false : true
   }

   public getImg(url: string): string {
      return this.img.get(url);
   }


}
