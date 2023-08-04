import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class DeviceController extends Controller {
  @tracked newDevice = '';
  @tracked newBrand = '';
  @tracked channelType = '';
  @tracked channelCount = '';
  @tracked selectedType = '';
  @tracked listOfTypes = '';


  @service store;

  constructor() {
    super(...arguments);
  }

  async init() {
    super.init();

    try {
      this.listOfTypes = await this.store.findAll('devicetype');
    } catch (e) {
      console.error('Error fetching types:', e);
    }

    // try {
    //   this.recipes = await this.store.findAll('recipe');
    // } catch (e) {
    //   console.error('Error fetching restaurants:', e);
    // }
  }

  @action
  async updateLinkedType()
  {
    const type = this.store
      .peekRecord(ResourceModel.DEVICETYPE, this.selectedType.id)
      //this.store.peekRecord("devicetype", typeid);

      return type;

  }



  @action
  async createDevice(event) {
    event.preventDefault();
        // create the new device
    const device = this.store.createRecord('device', {
      model: this.newDevice,
      brand: this.newBrand,
      channeltype: this.channelType,
      channels: this.channelCount
    });
    
    device.type = this.selectedType;
    device.save();

    this.newDevice = '';
    this.newBrand = '';
    this.channelType = '';
    this.channelCount = '';
    this.deviceType = '';
  }

  @action
  setChannelType(value) {
    this.channelType = value;
  }

  @action
  removeDevice(device, event) {
    event.preventDefault();
    device.destroyRecord();
  }

  @action
  setType(value){
    this.selectedType = value;
  }
}
