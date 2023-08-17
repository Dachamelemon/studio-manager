import Model, { attr } from '@ember-data/model';

export default class ChannelTypeModel extends Model {
  @attr('string') audiotype;
  @attr('string') channeltype;
  @attr('string') channeldirection;
}
