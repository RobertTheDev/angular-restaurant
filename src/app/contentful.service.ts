import { Injectable } from '@angular/core';
import { Entry, createClient } from 'contentful';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  private cdaClient = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  async getAllEntries(): Promise<Entry[]> {
    const res = await this.cdaClient.getEntries({
      content_type: 'menuItem',
    });
    return res.items;
  }

  async getRestaurantPage(): Promise<Entry> {
    return await this.cdaClient.getEntry('50p8gWOfatQ7XKzXTVZ8j9');
  }
}
