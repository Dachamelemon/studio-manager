import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class ConnectDeviceRoute extends Route {
    @service store
    async model(params){
        let channels = await this.store.findAll(ResourceModel.CHANNEL);
        let thischannel = this.store.findRecord(ResourceModel.CHANNEL, params.channel_id, {include: 'device'});
        return {allchannel: channels, thischannel: thischannel} 
    }
}
