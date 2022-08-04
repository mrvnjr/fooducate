import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FoodsComponent } from "./foods.component";

@NgModule({
    declarations: [FoodsComponent],
    imports: [CommonModule],
    exports: [FoodsComponent],
})
export class FoodsModule {}