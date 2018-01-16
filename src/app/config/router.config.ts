import {UIRouter} from '@uirouter/angular';
import {Injector} from '@angular/core';
import {UserService} from "../core/service/user/user.service";

const authorization = {
  logged: 'logged',
  notLogged: 'notLogged'
};

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  const criteria = {entering: (state) => state.data && state.data.authorization};
  router.transitionService.onBefore(criteria, requireAuthentication);
  router.urlService.rules.otherwise({state: 'login'});
}

function requireAuthentication(transition) {
  const $state = transition.router.stateService;
  const authSvc = transition.injector().get(UserService);
  const stateData = transition.targetState().$state().data;
  return authSvc.checkAuthenticated().toPromise().then(user => {
    if (stateData.authorization === authorization.logged && !user) {
      return $state.target('login');
    } else if (stateData.authorization === authorization.notLogged && user) {
      return $state.target('home.dashboard');
    }
  });
}
