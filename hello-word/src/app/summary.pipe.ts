import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: any, limit?: any) {
        if (!value) return null;

        // write limit text for this pipe
        return value.substr(0, 50);
    }
}