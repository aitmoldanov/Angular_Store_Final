import {Injectable} from '@angular/core';

@Injectable()
export class DataService{
  showTypeTour = true;
  pageTitle = 'Tour List';
  imageWidth = 70;
  imageMargin = 1;
  searchedKeyword: string;
  games = [
    {
      "gameId": 1,
      "gameName": "Castlevania",
      "gameCode": "AAA-0101",
      "releaseDate": "September 26, 2021",
      "price": 19.99,
      "thumbRating": 1,
      "imageUrl": "./assets/images/icons8-horse-stable-100.png"
    },
    {
      "gameId": 2,
      "gameName": "Dr Mario",
      "gameCode": "AAA-1100",
      "releaseDate": "July 27, 2021",
      "price": 15.99,
      "thumbRating": 0.95,
      "imageUrl": "./assets/images/icons8-bus-100.png"
    },
    {
      "gameId": 3,
      "gameName": "Kid Icarus",
      "gameCode": "AAA-0048",
      "releaseDate": "December 19, 2021",
      "price": 20.99,
      "thumbRating": 0.92,
      "imageUrl": "./assets/images/icons8-bicycle-100.png"
    },
    {
      "gameId": 4,
      "gameName": "Legend Of Zelda",
      "gameCode": "AAA-0049",
      "releaseDate": "February 21, 2021",
      "price": 29.95,
      "thumbRating": 0.97,
      "imageUrl": "./assets/images/icons8-car-100.png"
    },
    {
      "gameId": 7,
      "gameName": "Super Mario Bros",
      "gameCode": "AAA-3325",
      "releaseDate": "September 13, 2021",
      "price": 40.95,
      "thumbRating": 0.89,
      "imageUrl": "./assets/images/icons8-camel-100.png"
    }
  ];
  arrayOfTasks = ['25 min run', 'Breakfast', '25 min reading a book', 'Study'];

  getData(): string[] {
    return this.arrayOfTasks;
  }
  addData(name: string){
    this.arrayOfTasks.push(name);
  }

  getTypeTour(): boolean {
    return this.showTypeTour;
  }
  getPageTitle(): string{
    return this.pageTitle;
  }
  getGames(){
    return this.games;
  }
  getKeyword(){
    return this.searchedKeyword;
  }
  getImageMargin(){
    return this.imageMargin;
  }
  getImageWidth(){
    return this.imageWidth;
  }
}
