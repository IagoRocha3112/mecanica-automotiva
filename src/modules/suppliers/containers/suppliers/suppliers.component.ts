import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-suppliers',
    templateUrl: './suppliers.component.html',
    styleUrls: ['./suppliers.component.scss'],
})
export class SuppliersComponent implements OnInit {
    tabActive = 'cnpj';

    constructor() {}

    ngOnInit(): void {}
}
