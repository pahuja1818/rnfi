import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ToastService {

    successSymbol = '\u2713';
    errorSymbol = '\u2716';
    infoSymbol = '\u24D8';

    constructor(private snackBar: MatSnackBar) { }

    showToast(message: any, color = 'bg-violet') {
        this.snackBar.open(message, 'DISMISS', { duration: 3000, panelClass: [color, 'text-white', 'overlay'] });
    }

    success(message: string) {
        this.showToast(`${this.successSymbol} Whoa! ${message}`, 'bg-violet');
    }

    error(message: string) {
        this.showToast(`${this.errorSymbol} Oops! ${message}`, 'bg-danger');
    }

    info(message: string) {
        this.showToast(`${this.infoSymbol} Hey! ${message}`, 'bg-info');
    }

}
