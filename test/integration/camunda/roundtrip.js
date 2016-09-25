'use strict';

import { createModdle } from '../../helper';

import { fromFile, toXML, validate } from '../../xml-helper';

import camundaPackage from '../../fixtures/json/model/camunda';


describe('bpmn-moddle - integration', function() {

  describe('camunda extension', function() {

    var moddle = createModdle({ camunda: camundaPackage });

    function importFile(file, done) {
      fromFile(moddle, file, done);
    }


    describe('should serialize valid BPMN 2.0 after read', function() {

      this.timeout(15000);


      it('inputOutput', function(done) {

        // given
        importFile('test/fixtures/bpmn/extension/camunda/inputOutput.bpmn', function(err, result) {

          if (err) {
            return done(err);
          }

          // when
          toXML(result, { format: true }, function(err, xml) {
            validate(err, xml, done);
          });
        });
      });

    });

  });

});