import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public regionNames: any = [
    {
      regionName: 'Africa',
      image: 'http://www.primaryhomeworkhelp.co.uk/egypt/images/sp.jpg',
      description: 'Africa is the world\'s second largest and second most-populous continent (behind Asia in both categories).'
    },
    {
      regionName: 'Americas',
      image: 'https://i.ndtvimg.com/i/2018-01/statue-of-liberty_650x400_61516584069.jpg',
      description: "The Americas (also collectively called America) comprise the totality of the continents of North and South America.Together, they make up most of the land in Earth's western hemisphere and comprise the New World."
    },
    {
      regionName: 'Asia',
      image: 'https://wallpapercave.com/wp/wp2037797.jpg',
      description: "Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa"
    },
    {
      regionName: 'Europe',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcs-GUNYJLmTwSAVEtUJ7nH-bmDYlslGScbcQXVM72qk09iuqg',
      description: "Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west and the Mediterranean Sea to the south. It comprises the westernmost part of Eurasia."
    },
    {
      regionName: 'Oceania',
      image: 'http://www.traveller.com.au/content/dam/images/1/1/k/j/n/k/image.gallery.galleryLandscape.620x414.11kg16.png/1459821698905.jpg',
      description: "Oceania is a geographic region comprising Australasia, Melanesia, Micronesia and Polynesia.It covers an area of 8,525,989 square kilometres (3,291,903 sq mi) and has a population of 40 million"
    }
  ];
  constructor(private _route: ActivatedRoute, private router: Router) {
    console.log("Home component constructor called.")
  }

  ngOnInit() {
  }

}
