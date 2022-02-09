import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { FakeStoreService } from 'src/app/core/api/fakeStore.service';
import { Category } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [FakeStoreService],
})
export class HomeComponent implements OnInit {
  title = 'Home';
  products: Product[] = [];
  categories: Category[] = [];
  fakeStoreService: FakeStoreService;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  constructor() {}

  ngOnInit() {
    //Side Effect
    this.fakeStoreService.getAllProducts().subscribe((response) => {
      //State Change
      this.products = <Product[]>response;
      console.log(this.products);
    });

    this.fakeStoreService.getAllCategories().subscribe((response) => {
      (<string[]>response).forEach((title, index) => {
        let cat = new Category();
        cat.title = title.charAt(0).toUpperCase() + title.substring(1);
        this.categories[index] = cat;
      });

      this.categories.forEach((category) => {
        switch (category.title) {
          case 'Jewelery':
            category.image =
              'https://www.theteacherdiva.com/wp-content/media/File_000-1024x1280.jpeg';
            category.description =
              'Rings and one-of-a-kind necklaces, dresses, tops and more, all carefully selected to bring you festival-ready looks and global flair at affordable prices';
            break;
          case "Men's clothing":
            category.image =
              'https://images2.drct2u.com/repo/CGN/desktop/pages/freeformat/2019/Flintoff/02-images/mobile/CGN_Flintoff_FF_V1_14.png';
            category.description =
              "We've got a selection of stylish looks for you to choose from this season. From casual tops, t-shirts and jeans that are ideal for relaxed days, to shorts and swimwear for your next getaway, we've got everything you need.";
            break;
          case "Women's clothing":
            category.image =
              'http://keshiastore.com/wp-content/uploads/2021/04/E-Com-2-6.jpg';
            category.description =
              "Refresh your wardrobe with key seasonal pieces from our collection for women. From jumpsuits, dresses and heels for a smart casual look, to swim and beachwear for your next getaway, we've got everything you need.";
            break;

          default:
            break;
        }
      });
      this.categories.shift();
      const catGlass = this.categories[0];
      this.categories[0] = this.categories[1];
      this.categories[1] = catGlass;
      console.log(this.categories);
    });
  }

  prevSlide() {
    this.carousel.prev();
  }

  nextSlide() {
    this.carousel.next();
  }

  stopSlider() {
    this.carousel.pause();
  }
}
