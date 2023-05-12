import { NbMenuItem } from '@nebular/theme';

export declare abstract class MenuItem extends NbMenuItem {
  key?: string;
  children?: MenuItem[];
  parent?: MenuItem;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Data Sharing',
    icon: 'grid-outline',
    link: '/pages/share-management',
  }
]