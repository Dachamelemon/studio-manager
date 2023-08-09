import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { ResourceModel } from '../helpers/resource-models';

export default class DeviceTypeModel extends Model {
  @attr('string') type;
  @hasMany(ResourceModel.DEVICE, { async: true, inverse: null }) devices;
}
