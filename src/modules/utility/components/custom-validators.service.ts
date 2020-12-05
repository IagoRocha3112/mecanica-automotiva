import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';

@Injectable({
    providedIn: 'root',
})
export class CustomValidatorsService {
    limitSizeImage = {
        message: 'Essa imagem excedeu o limite máximo de 5MB!',
        valueInBytes: 5 * Math.pow(10, 6),
    };

    constructor(private imageCompress: NgxImageCompressService) {}

    static isFile(control: FormControl): { [key: string]: any } | null {
        if (control instanceof File) {
            return { isFile: true };
        }
        return null;
    }

    public async imageUploadAndCompression(): Promise<string> {
        return this.imageCompress.uploadFile().then(async ({ image, orientation }) => {
            const fileSize = this.imageCompress.byteCount(image);
            // Check mime type is image
            if (image.slice(5, 10) !== 'image') {
                alert('O arquivo enviado é inválido, só é permitido arquivos do tipo imagem!');
                return '';
            }
            // Check size image
            if (fileSize > this.limitSizeImage.valueInBytes) {
                alert(this.limitSizeImage.message);
                return '';
            }
            // Compress image
            return this.imageCompress
                .compressFile(image, orientation, 50, 50)
                .then((compressedImage: string) => {
                    return compressedImage;
                });
        });
    }
}
