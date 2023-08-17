import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class ChannelTypeRoute extends Route {
  @service store;
  async model() {
    let channels = await this.store.findAll(ResourceModel.CHANNELTYPE);
    channels = [...channels];
    return channels;
  }
}
