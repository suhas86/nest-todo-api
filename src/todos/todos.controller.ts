import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Post()
  createTodo(@Body() body: any) {
    console.log('Create TODO ', body);
  }
  @Get()
  findTodos() {
    console.log('Get all todos');
  }
  @Get('/:id')
  findTodoById(@Param('id') id: string) {
    console.log(`Get Todo by Id ${id}`);
  }
  @Patch('/:id')
  updateTodoStatus(@Param('id') id: string) {
    console.log(`Update Todo by Id ${id}`);
  }
}
