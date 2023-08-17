import Component from '@glimmer/component';
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class ChannelSelectComponent extends Component {
    @tracked allChannels = '';
    async init() {
        super.init();
        try {
          this.allChannels = await this.store.findAll(ResourceModel.CHANNELTYPE);
        } catch (e) {
          this.message = 'Error fetching types:' + e;
          this.showBlock('errorMessage')
        }
      }
}
