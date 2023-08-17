import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { ResourceModel } from '../helpers/resource-models';

export default class DeviceinfoRoute extends Route {
    model(param){

    }

    queryParams = {s: { refreshModel: false } }
}