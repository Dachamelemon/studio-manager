import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { ResourceModel } from '../helpers/resource-models';

export default class DeviceModel extends Model {
  @attr('string') model;
  @attr('string') brand;
  @hasMany(ResourceModel.CHANNEL, { async: true, inverse: null }) channels;
  @belongsTo(ResourceModel.DEVICETYPE, { async: true, inverse: null })
  deviceType;
  @hasMany(ResourceModel.DEVICE, { async: true, inverse: null }) devices;
}
