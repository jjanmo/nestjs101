import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This is return all movies';
  }

  @Get('search')
  search(@Query('keyword') keyword: string) {
    return `We are searching for keyword: ${keyword}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This is return one movies with id:${id}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return `This will delete movie by id:${id}`;
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() movieData) {
    return {
      updatedMovie: id,
      ...movieData,
    };
  }
}
