import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class DeviceinfoController extends Controller {
queryParams = ['s'];
s ='';
  @tracked deviceName = '';

  @service store;

  constructor() {
    super(...arguments);
  }

  async init() {
    super.init();
    try {
        console.log(this.queryParams);
     this.mydevices = await this.store.findRecord(ResourceModel.DEVICE, this.s,{ include: 'device-type,channels' });
     this.deviceName = device.brand + ' ' + device.model;
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async getLinkedChannelCount(channels){
    let tests = 'yes';
    channels.forEach(channel => async function(){
      let links = await this.store.findRecord(element.id);
    });
    return tests;
  }
}
