import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mysql: {
      table: 'permit_types'
    }
  }
})
export class PermitType extends Entity {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4',
  })
  uuid?: string;

  @property({
    type: 'string',
    required: true,
  })
  label: string;


  constructor(data?: Partial<PermitType>) {
    super(data);
  }
}

export interface PermitTypeRelations {
  // describe navigational properties here
}

export type PermitTypeWithRelations = PermitType & PermitTypeRelations;
