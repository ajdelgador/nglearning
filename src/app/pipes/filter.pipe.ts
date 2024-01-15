import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterCities'
    //, pure:true
})
export class FilterPipe implements PipeTransform {
    //transform(value: any, ...args: any[]) {
    transform(values: string[], arg: string): string[] {
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

}