import ajax, {ajaxNotInjected} from '../js/ajax';
import Config from '../js/config';

describe('ajax', function () {
  describe('mocking fetch', function () {
    it('passes in fetch', function (done) {
      let promise = Promise.resolve(new Response('{}', {
        headers: 'Content-Type: application/json',
        status: 200}));
      let fetch = jasmine.createSpy('fetch').and.returnValue(promise);
      var dispatch = jasmine.createSpy('dispatch');

      ajax(fetch)(dispatch).then(() => {
        let ajaxAction = {
          type: 'AJAX',
          response: {}
        };
        expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/trevorwhitney/repos');
        expect(dispatch).toHaveBeenCalledWith(ajaxAction);
        done();
      });
    });

    //this is how backbone does it
    it('mocks an application global, instead of a global global', function (done) {
      let fetch = jasmine.createSpy('fetch').and.returnValue(Promise.resolve(new Response('{"foo": "bar"}', {
        headers: 'Content-Type: application/json',
        status: 200
      })));

      let dispatch = jasmine.createSpy('dispatch)');

      Config.fetch = fetch;
      ajaxNotInjected()(dispatch).then(() => {
        let ajaxAction = {
          type: 'AJAX',
          response: {foo: "bar"}
        };

        expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/trevorwhitney/repos');
        expect(dispatch).toHaveBeenCalledWith(ajaxAction);
        done();
      });
    });
  });
});