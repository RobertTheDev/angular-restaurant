import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss'],
})
export class RestaurantPageComponent implements OnInit {
  images: any = [];
  content: any = null;

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.contentfulService
      .getRestaurantPage()
      .then((entry: any) => {
        const rawRichTextField: any = entry.fields['content'];
        this.images = entry.fields['imageUri'];
        return documentToHtmlString(rawRichTextField);
      })
      .then((renderedHtml: string) => {
        // do something with the HTML, like update a variable
        console.log(renderedHtml);
        this.content = renderedHtml;
      })
      .catch((error: any) => console.log(error));
  }
}

// this.contentfulService.getRestaurantPage().then((data) => {
//   if (data.fields['imageUri']) {
//     this.images = data.fields['imageUri'];
//   }
//   if (data.fields['content']) {
//     this.content = data.fields['content'];
//   }
// });
