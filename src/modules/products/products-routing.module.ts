import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Containers */
import * as productsContainers from './containers';
/* Module */
import { ProductsModule } from './products.module';

const ROUTES: Routes = [
    {
        path: 'create',
        canActivate: [],
        component: productsContainers.CreateProductComponent,
        data: {
            title: 'Cadastro de Produtos',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Produtos',
                    link: '/products',
                },
                {
                    text: 'Cadastro de Produto',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [ProductsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ProductsRoutingModule {}
