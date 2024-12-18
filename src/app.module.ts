import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'node:path/win32';
import { CountryModule } from './country/country.module';
import { RedirectController } from './redirect/redirect.controller';

@Module({
  imports: [CountryModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      serveRoot: '/client'
    }),
  ],
  controllers: [AppController, RedirectController],
  providers: [AppService],
})
export class AppModule {}
