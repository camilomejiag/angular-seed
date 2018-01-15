import {NavbarComponent} from "./commons/components/navbar/navbar.component";
import {SidebarComponent} from "./commons/components/sidebar/sidebar.component";

export const state = {
  name: 'home',
  abstract: true,
  views: {
    'navbar@': {
      component: NavbarComponent
    },
    'sidebar@': {
      component: SidebarComponent
    }
  }
};