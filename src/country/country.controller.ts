import { Controller, Get, Post, Param, Res } from '@nestjs/common';
import { Response } from "express";
import {join} from 'path'

@Controller('countries')
export class CountryController {
  @Get(':country')
  sendCountryFile(@Param('country') country: string, @Res() res: Response) {
    const filePath = join(__dirname, '..', '..', 'client', country, 'index.html' );
    res.sendFile(filePath)
  }
}

