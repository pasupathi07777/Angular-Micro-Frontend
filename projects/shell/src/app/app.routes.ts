// import { Routes } from '@angular/router';
// import { loadRemoteModule } from '@angular-architects/module-federation';
// export const routes: Routes = [
//   {
//     path: '',
//     loadComponent: () =>
//       loadRemoteModule({
//         type: 'manifest',
//         remoteName: 'mfe1',
//         exposedModule: './Component',
//       }).then((m) => m.AppComponent),
//   },
//     {
//     path: '2',
//     loadComponent: () =>
//       loadRemoteModule({
//         type: 'manifest',
//         remoteName: 'mfe2',
//         exposedModule: './Component',
//       }).then((m) => m.AppComponent),
//   },
//   {
//     path:'',redirectTo:'1',pathMatch:'full' 
//   }
// ];


import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component'
      }).then(m => m.default) // Note the .default for standalone components
  },
  {
    path: 'mfe2',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Component'
      }).then(m => m.default) // Note the .default for standalone components
  },
  {
    path: '',
    redirectTo: 'mfe1',
    pathMatch: 'full',
  },
];