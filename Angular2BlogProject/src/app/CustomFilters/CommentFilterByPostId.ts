import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByPostId'
})
export class FilterCommentByPostId implements PipeTransform {
    transform(items: Array<any>, PostId: string): Array<any> {
        return items.filter(item => item.PostId === PostId);
    }
}