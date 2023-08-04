import Model, { attr, belongsTo } from '@ember-data/model';
import { ResourceModel } from '../helpers/resource-models';

export default class DeviceModel extends Model {
  @attr('string') model;
  @attr('string') brand;
  @attr('string') channeltype;
  @attr('number') channels;
  @belongsTo(ResourceModel.DEVICETYPE, {async: true, inverse: null}) type;
}
