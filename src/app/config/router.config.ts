import {UIRouter} from '@uirouter/angular';
// import {visualizer} from '@uirouter/visualizer';
import {Injector, Injectable} from '@angular/core';
import {UserService} from "../core/service/user/user.service";

const authorization = {
  logged: 'logged',
  notLogged: 'notLogged'
};

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  const changeState = {entering: (state) => state.data && state.data.authorization};
  router.transitionService.onBefore(changeState, Authentication);
  // If no URL matches, go to the `login` state by default
  router.urlService.rules.otherwise({ state: 'login' });
}

function Authentication(transition) {
  // Checking on state transition if user's logged
  const $state = transition.router.stateService;
  const authService = transition.injector().get(UserService);
  const stateData = transition.targetState().$state().data;
  return authService.getUser().toPromise().then(user => {
    if (stateData.authorization === authorization.logged && !user) {
      return $state.target('login');
    } else if (stateData.authorization === authorization.notLogged && user) {
      return $state.target('home.dashboard');
    }
  });
}
