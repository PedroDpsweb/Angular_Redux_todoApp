import {
  createReducer,
  on,
  State
} from '@ngrx/store';
import * as actions from './todo.actions';
import {
  Todo
} from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Derrotar a Thanos'),
  new Todo('Comprar traje Ironman'),
  new Todo('Robar escudo del cap')
];

// tslint:disable-next-line: variable-name
const _todoReducer = createReducer(estadoInicial,
  on(actions.crear, (state, {
    texto
  }) => [...state, new Todo(texto)]),
  on(actions.borrar, (state, {
    id
  }) => state.filter(todo => todo.id !== id)),
  on(actions.toggle, (state, {
    id
  }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.toggleAll, (state, {completado}) =>  state.map(todo => {
        return {
          ...todo,
          completado
        };
      }


  )),
  on(actions.limpiarCompletados, (state) =>  state.filter(todo =>  !todo.completado
)),
  on(actions.editar, (state, {
    id,
    texto
  }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: texto
        };
      } else {
        return todo;
      }
    });
  }),
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
