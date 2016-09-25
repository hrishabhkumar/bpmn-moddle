'use strict';

import { assign } from 'lodash-es';

import BpmnModdle from './bpmn-moddle';

const packages = {
  bpmn: require('../resources/bpmn/json/bpmn.json'),
  bpmndi: require('../resources/bpmn/json/bpmndi.json'),
  dc: require('../resources/bpmn/json/dc.json'),
  di: require('../resources/bpmn/json/di.json')
};

export default function createModdle(additionalPackages, options) {
  return new BpmnModdle(assign({}, packages, additionalPackages), options);
}