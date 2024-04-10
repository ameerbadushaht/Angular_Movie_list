import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Movie {
  name: string;
  des: string;
  image: string;
}

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {
  @ViewChild('carousel') carousel: ElementRef<HTMLDivElement>;

  movies: Movie[] = [
    { name: 'Falcon the Winter Soldier', des: 'Lorem ipsum...', image: 'slider2.png' },
    { name: 'Loki', des: 'Lorem ipsum...', image: 'slider1.png' },
    { name: 'WandaVision', des: 'Lorem ipsum...', image: 'slider3.png' },
    { name: 'Raya and the Last Dragon', des: 'Lorem ipsum...', image: 'slider4.png' },
    { name: 'Luca', des: 'Lorem ipsum...', image: 'slider5.png' }
  ];

  sliders: HTMLDivElement[] = [];
  slideIndex = 0;

  ngOnInit(): void {
    for (let i = 0; i < 3; i++) {
      this.createSlide();
    }

    setInterval(() => {
      this.createSlide();
    }, 3000);
  }

  createSlide(): void {
    if (this.slideIndex >= this.movies.length) {
      this.slideIndex = 0;
    }

    const slide = document.createElement('div');
    const imgElement = document.createElement('img');
    const content = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    imgElement.src = this.movies[this.slideIndex].image;
    h1.textContent = this.movies[this.slideIndex].name;
    p.textContent = this.movies[this.slideIndex].des;

    imgElement.appendChild(document.createTextNode(''));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    this.carousel.nativeElement.appendChild(slide);
    this.sliders.push(slide);

    if (this.sliders.length) {
      this.sliders[0].style.marginLeft = `calc(-${100 * (this.sliders.length - 2)}% - ${
        30 * (this.sliders.length - 2)
      }px)`;
    }

    this.slideIndex++;
  }
}
