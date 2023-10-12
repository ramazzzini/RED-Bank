import { BaseScreen } from "@/core/component/base-screen.component";
import ChildComponent from '@/core/component/child.component';
import renderService from "@/core/services/render.service";
import template from "./header.template.html";
import styles from "./header.module.scss";

export class Header extends ChildComponent{
    render() {
        this.element = renderService.htmlToElement(template, [], styles)
        return this.element
    }
}