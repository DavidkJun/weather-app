import { Controller, Get, Post, Param, Res } from '@nestjs/common';
import {CountryService} from "./country.service";
import { Response } from "express";
import {join} from 'path'

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get(':country')
  sendCountry(): Response {
    this.countryService.sendCountryFile()
  }
}

