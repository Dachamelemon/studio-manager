import Model, { attr } from '@ember-data/model';

export default class ChannelModel extends Model {
  @attr('string') audiotype;
  @attr('string') channeltype;
  @attr('string') channeldirection;
}
