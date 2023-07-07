import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/app/environments/environement';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.spaceId,
  });

  getAllEntries() {
    const promise = this.client.getEntries();
    return from(promise);
  }

  getEntryById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise);
  }

  getEntryByField() {
    const promise = this.client.getEntries({
      content_type: 'aboutPage',
    });
    return from(promise);
  }
}
