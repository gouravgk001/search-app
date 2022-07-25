import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'image-search-engine';
  images: any = [];
  searchImage: any;

  constructor(private http: HttpClient) {
    //this.getData();
  }

  getImage() {
    this.http
      .get(
        'https://pixabay.com/api/?key=28786749-a092bf32100ed8677a69247d4&q=' +
          this.searchImage +
          '&image_type=photo&pretty=true'
      )
      .subscribe((response) => {
        this.images = response;
        console.log(this.images);
      });
  }

  // getImage() {
  //   console.log(this.searchImage);
  // }
}
