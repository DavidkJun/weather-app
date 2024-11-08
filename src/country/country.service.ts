import { Injectable, Param, Res } from "@nestjs/common";
import { Response } from "express";
import { join } from "path";

@Injectable()
export class CountryService {
  sendCountryFile(@Param('country') country: string, @Res() res: Response) {
    const filePath = join(__dirname, '..', '..', 'client', country, 'index.html' );
    res.sendFile(filePath)
  }
}