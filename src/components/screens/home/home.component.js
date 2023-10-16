import { Field } from "@/components/ui/field/field.component";
import { BaseScreen } from "@/core/component/base-screen.component";
import { $R } from '@/core/rquery/rquery.lib';
import renderService from "@/core/services/render.service";
import styles from "./home.module.scss";
import template from "./home.template.html";

export class Home extends BaseScreen{

    constructor(){
        super({title: 'Home'})
    }

    render() {
        const element = renderService.htmlToElement(template, [
            new Field({
                name: 'Ramazan',
                placeholder: 'Ramazan',
                variant: 'green',
                
            })
        ], styles)

        $R(element).find('h1').css('color', 'green')

        return element
    }
}