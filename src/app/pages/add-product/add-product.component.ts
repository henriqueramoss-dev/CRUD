import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [NgFor, NgIf], // 🔥 ADICIONA NgIf AQUI
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  // 📏 TAMANHOS
  sizes = ['PP','P','M','G','GG','36','38','40','42','44'];
  selectedSizes: string[] = [];

  toggleSize(size: string) {
    if (this.selectedSizes.includes(size)) {
      this.selectedSizes = this.selectedSizes.filter(s => s !== size);
    } else {
      this.selectedSizes.push(size);
    }
  }

  // 🖼️ GALERIA (MÚLTIPLAS IMAGENS)
  images: string[] = [];

  // 📂 SELECIONAR VÁRIAS IMAGENS
  onMultipleSelected(event: any) {
    const files = event.target.files;

    if (!files) return;

    for (let file of files) {
      this.readFile(file);
    }
  }

  // 🖱️ DRAG OVER
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  // 📥 DROP
  onDrop(event: DragEvent) {
    event.preventDefault();

    const files = event.dataTransfer?.files;
    if (!files) return;

    for (let file of files) {
      this.readFile(file);
    }
  }

  // 🔄 LER ARQUIVO
  readFile(file: File) {
    if (!file.type.startsWith('image/')) return;

    if (this.images.length >= 5) return; // limite

    const reader = new FileReader();

    reader.onload = () => {
      this.images.push(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  // ❌ REMOVER IMAGEM
  removeImage(index: number) {
    this.images.splice(index, 1);
  }

  

}