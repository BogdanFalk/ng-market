import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FakeStoreService } from 'src/app/core/api/fakeStore.service';
import { FilterOption } from 'src/app/shared/models/filterOption';
import { FilterType } from 'src/app/shared/models/filterTypes';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [FakeStoreService],
})
export class FilterComponent implements OnInit {
  constructor() {}

  @ViewChild('ngx-slider') ngxSlider: NgxSliderModule;

  public filters = FilterType;
  public sliderValue: number = 0;
  public sliderHighValue: number = 1;
  public sliderOptions: Options = {
    floor: 0,
    ceil: 1,
    translate: (value: number): string => {
      return value + ' lei';
    },
  };

  ngOnInit(): void {
    this.sliderValue =
      this._filterOptions[0].minValue !== undefined
        ? this._filterOptions[0].minValue
        : 0;
    this.sliderHighValue =
      this._filterOptions[0].maxValue !== undefined
        ? this._filterOptions[0].maxValue
        : 0;
    this.sliderOptions.floor = this._filterOptions[0].minValue;
    this.sliderOptions.ceil = this._filterOptions[0].maxValue;
  }

  @Input()
  _filterName: string;

  @Input()
  _filterType: FilterType;

  @Input()
  _filterOptions: Partial<FilterOption>[];

  public getFilterOptions() {
    console.log(this._filterOptions);
    return this._filterOptions;
  }
}
