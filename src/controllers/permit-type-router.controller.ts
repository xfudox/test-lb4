import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {PermitType} from '../models';
import {PermitTypeRepository} from '../repositories';

export class PermitTypeRouterController {
  constructor(
    @repository(PermitTypeRepository)
    public permitTypeRepository: PermitTypeRepository,
  ) { }

  @post('/permit-types')
  @response(200, {
    description: 'PermitType model instance',
    content: {'application/json': {schema: getModelSchemaRef(PermitType)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PermitType, {
            title: 'NewPermitType',
            exclude: ['uuid'],
          }),
        },
      },
    })
    permitType: Omit<PermitType, 'uuid'>,
  ): Promise<PermitType> {
    return this.permitTypeRepository.create(permitType);
  }

  @get('/permit-types/count')
  @response(200, {
    description: 'PermitType model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PermitType) where?: Where<PermitType>,
  ): Promise<Count> {
    return this.permitTypeRepository.count(where);
  }

  @get('/permit-types')
  @response(200, {
    description: 'Array of PermitType model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PermitType, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PermitType) filter?: Filter<PermitType>,
  ): Promise<PermitType[]> {
    return this.permitTypeRepository.find(filter);
  }

  @patch('/permit-types')
  @response(200, {
    description: 'PermitType PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PermitType, {partial: true}),
        },
      },
    })
    permitType: PermitType,
    @param.where(PermitType) where?: Where<PermitType>,
  ): Promise<Count> {
    return this.permitTypeRepository.updateAll(permitType, where);
  }

  @get('/permit-types/{id}')
  @response(200, {
    description: 'PermitType model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PermitType, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PermitType, {exclude: 'where'}) filter?: FilterExcludingWhere<PermitType>
  ): Promise<PermitType> {
    return this.permitTypeRepository.findById(id, filter);
  }

  @patch('/permit-types/{id}')
  @response(204, {
    description: 'PermitType PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PermitType, {partial: true}),
        },
      },
    })
    permitType: PermitType,
  ): Promise<void> {
    await this.permitTypeRepository.updateById(id, permitType);
  }

  @put('/permit-types/{id}')
  @response(204, {
    description: 'PermitType PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() permitType: PermitType,
  ): Promise<void> {
    await this.permitTypeRepository.replaceById(id, permitType);
  }

  @del('/permit-types/{id}')
  @response(204, {
    description: 'PermitType DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.permitTypeRepository.deleteById(id);
  }
}
