import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService){
    }

    @Get()
    getAllCars() {
        return this.carsService.findAll()
    }

    @Get(':id')
    getCarById( @Param('id', ParseIntPipe) id: number) {
        console.log({id})
        return this.carsService.findOneById( id )
    }

    @Post()
    createCar(@Body() body:any ) {
        return {
            message: 'Car created'
        }
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseIntPipe) id: number,
        @Body() body:any ) {
        return {
            message: 'Update Car with id: ' + id
        }
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        return {
            message: 'Delete car with id: ' + id
        }
    }
}
