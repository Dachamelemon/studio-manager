import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';
import { sort } from '@ember/object/computed'

export default class DeviceinfoController extends Controller{
  @tracked deviceName = '';
  @tracked mydevice;


  @service store;

  constructor() {
    super(...arguments);
  }

  async init() {
    super.init();
    try {
      
    } catch (e) {
      console.log(e);
    }
  }
}
