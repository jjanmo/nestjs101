import { Module } from '@nestjs/common';
import { MoivesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoivesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
