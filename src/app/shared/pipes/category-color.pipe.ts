import { Pipe, PipeTransform } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Pipe({
    name: 'categoryColor'
})
export class CategoryColorPipe implements PipeTransform {

    categoryList = [
        {id:2, name:'Angular', slug: 'angular'},
        {id:11, name:'Composer', slug: 'composer'},
        {id:13, name:'Docker', slug: 'docker'},
        {id:4, name:'CSS', slug: 'css'},
        {id:6, name:'HTML', slug: 'html'},
        {id:7, name:'JavaScript', slug: 'javascript'},
        {id:10, name:'Laravel', slug: 'laravel'},
        {id:9, name:'PHP', slug: 'php'},
        {id:8, name:'React', slug: 'react'},
        {id:3, name:'WordPress', slug: 'wordpress'},
        {id:5, name:'Sass', slug: 'sass'}
    ];

    constructor(private categoryService: CategoriesService) {  }

    transform(categories: any[]) {
        let catlist = this.categoryList;
        let classList = '';
            if(categories.length < 0) { return; }
            categories.forEach(function(el, i) {
                let classname = catlist.find(function (classname) {
                    if(classname.id === el) {
                        classList += "color-"+classname.slug+" ";
                        return classname.id === el;
                    }
                });

            }
        )
        if(classList === '') { classList = "color-default" }
        return classList;
    }
}





// @Pipe({name: 'translate'})
// export class translatePipe implements PipeTransform {
//     public translationService: translationService;

// constructor(@Inject(translationService) translationService: translationService){
//     this.translationService = translationService;
// }
// transform(value: string) {
//     this.translationService.translate(value).subscribe(function(ret){
//         return ret;
//     });

// }
