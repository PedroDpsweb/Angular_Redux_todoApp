import {
  createAction,
  props
} from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear TODO',
  props < {
    texto: string
  } > ()
);

export const toggle = createAction(
  '[TODO] Toggle TODO',
  props < {
    id: number
  } > ()
);

export const toggleAll = createAction(
  '[TODO] Toggle-All TODO',
  props < {
    completado: boolean
  } > ()
);

export const editar = createAction(
  '[TODO] Editar TODO',
  props < {
    id: number, texto: string
  } > ()
);

export const borrar = createAction(
  '[TODO] Borrar TODO',
  props < {
    id: number
  } > ()
);

export const limpiarCompletados = createAction(
  '[TODO] Limpiar Completados TODO'
);
