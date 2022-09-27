import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class CookBookContextService {

  private cdaClient = createClient({
    space: environment.space,
    accessToken: environment.accessToken
  });
  constructor() { }

  getRecipes() {
    return this.cdaClient.getEntries();
  }
}
