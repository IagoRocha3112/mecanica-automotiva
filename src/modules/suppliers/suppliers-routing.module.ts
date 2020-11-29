import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Containers */
import * as suppliersContainers from './containers';
/* Module */
import { SuppliersModule } from './suppliers.module';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: suppliersContainers.SuppliersComponent,
        data: {
            title: 'Cadastro de Fornecedores',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Fornecedores',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [SuppliersModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class SuppliersRoutingModule {}
