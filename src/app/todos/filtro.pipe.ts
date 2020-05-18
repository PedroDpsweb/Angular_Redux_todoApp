import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todo: Todo[], filtro: filtrosValidos): Todo[] {
    switch ( filtro ){
      case 'completados':
        return todo.filter( todos => todos.completado);
        case 'pendientes':
        return todo.filter( todos => !todos.completado);
        default:
        return todo;
    }
  }

}
