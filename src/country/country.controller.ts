import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('country')
export class CountryController {

  @Get(":countryName")
  showAll(@Param("countryName")countryName: string) {
    return({ country:{countryName: countryName
    }}
    );
  }

  @Post(":countryName")
  checkWeather(@Param("countryName")countryName: string) {
    return `${countryName} weather is sunny`
  }
}

