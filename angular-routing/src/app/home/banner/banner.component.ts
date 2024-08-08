import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  value:string;
  router : Router = inject(Router);

  onSearchClicked(value:string){
    console.log(value);
    this.router.navigate(['/Courses'], {queryParams: {search: value}});
  }
}