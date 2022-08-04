import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FoodsCardComponent } from "./foods-card.component";

@NgModule({
    declarations: [FoodsCardComponent],
    imports: [CommonModule],
    exports: [FoodsCardComponent],
})
export class FoodsCardModule {}