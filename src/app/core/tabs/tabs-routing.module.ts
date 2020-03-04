import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pages/news/news.module').then(m => m.NewsPageModule)
          }
        ]
      },
      {
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pages/info/info.module').then(m => m.InfoPageModule)
          }
        ]
      },
      {
        path: 'agenda',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../pages/agenda/agenda.module').then(m => m.AgendaPageModule)
          }
        ]
      },
      {
        path: 'venue',
        children: [
          {
            path: '',
            loadChildren: () => import('../../pages/venue/venue.module').then( m => m.VenuePageModule)
          }
        ]
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: () => import('../../pages/contact/contact.module').then( m => m.ContactPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
