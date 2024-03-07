import { Pipe, PipeTransform } from "@angular/core";
import { City } from '../services/data.service';

@Pipe({
    name: 'filterCities'
    //, pure:true
})
export class FilterPipe implements PipeTransform {
    //transform(value: any, ...args: any[]) {
    transform(cities: City[], nombre: string): City[] {
        console.log("transform" + nombre)
        let result: City[] = [];
        if (nombre && nombre?.length > 3){
            cities.forEach(city => {
                if (city.nombre.toLowerCase().indexOf(nombre.toLowerCase()) > -1)
                    result = [...result, city]
            });
            return result;
        } 
        return cities;
    }



    /*  transform(values: string[], arg: string): string[] {
         console.log("transform" + arg)
         let result: string[] = [];
         if (!arg || arg?.length < 3 || arg === "*")
             return values;
         else {
             values.forEach(element => {
                 if (element.toLowerCase().indexOf(arg.toLowerCase()) > -1)
                     result = [...result, element]
             });
             return result;
         }
     }
  */
}