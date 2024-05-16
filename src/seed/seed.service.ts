import { Injectable } from '@nestjs/common';
import { CAR_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed';
import { CarsService } from 'src/cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
  ) {

  }
  
  populatedDB() {
    this.carsService.fillCarsWithSeedData(CAR_SEED)
    this.brandsService.fillBrandsWithSeedData(BRAND_SEED)
    return 'Seed executed';
  }
}
