import Model, { attr, belongsTo } from '@ember-data/model';
import { ResourceModel } from '../helpers/resource-models';

export default class ChannelModel extends Model {
  @attr('number') channelposition;
  @belongsTo(ResourceModel.DEVICE, { async: true, inverse: null }) device;
  @belongsTo(ResourceModel.CHANNELTYPE, { async: true, inverse: null }) channel;
  @belongsTo(ResourceModel.CHANNEL, { async: true, inverse: null })
  connectedDevice;
}
