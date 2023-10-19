import ChildComponent from "@/core/component/child.component";
import renderService from "@/core/services/render.service";
import template from "./loader.template.html";
import styles from "./loader.module.scss";
import { $R } from "@/core/rquery/rquery.lib";

export const LOADER_SELECTOR = '[data-component="loader"]'

export class Loader extends ChildComponent{
    constructor(width = 100, height = 100){
        super()

        this.width = width
        this.height = height
    }
    render() {
        this.element = renderService.htmlToElement(template, [], styles)

        $R(this.element)
            .css('width', `${this.width}px`)
            .css('height', `${this.height}px`)
            .addClass('bounce')

        return this.element
    }
}