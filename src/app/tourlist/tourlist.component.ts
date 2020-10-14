import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tourlist',
  templateUrl: './tourlist.component.html',
  styleUrls: ['./tourlist.component.css']
})
export class TourlistComponent implements OnInit {
  currentRate = 6;
  constructor() { }
  showTypeTour = true;
  pageTitle = 'Tour List';
  imageWidth = 70;
  imageMargin = 1;
  listItem = 'Mario';
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
  ngOnInit(): void {
  }
  toggleImage(): void {
    this.showTypeTour = !this.showTypeTour;
  }



}
