'use strict';

import {
  existsSync,
  readFileSync,
  mkdirSync
} from 'fs';

import BpmnModdle from '../';


export function ensureDirExists(dir) {

  if (!existsSync(dir)) {
    mkdirSync(dir);
  }
}

export function readFile(filename) {
  return readFileSync(filename, { encoding: 'UTF-8' });
}


export function createModdle(additionalPackages, options) {
  return new BpmnModdle(additionalPackages, options);
}