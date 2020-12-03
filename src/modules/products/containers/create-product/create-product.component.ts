import { Component, OnInit } from '@angular/core';

import { CustomValidatorsService } from './../../../utility/components/custom-validators.service';

@Component({
    selector: 'sb-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
    imageOfProduct: any;
    constructor(private utils: CustomValidatorsService) {}

    ngOnInit(): void {}

    async uploadImage() {
        const image = await this.utils.imageUploadAndCompression();
        if (image !== '') {
            this.imageOfProduct = image;
        } else {
            this.imageOfProduct = undefined;
        }
    }
}
