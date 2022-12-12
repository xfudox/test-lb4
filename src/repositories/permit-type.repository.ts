import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {PermitType, PermitTypeRelations} from '../models';

export class PermitTypeRepository extends DefaultCrudRepository<
  PermitType,
  typeof PermitType.prototype.uuid,
  PermitTypeRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(PermitType, dataSource);
  }
}
