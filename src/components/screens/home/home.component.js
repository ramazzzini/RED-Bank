import { Field } from "@/components/ui/field/field.component";
import { UserItem } from "@/components/ui/user-item/user-item.component";
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
            }),
            new UserItem(
                {
                    avatarPath: 'https://avatars.mds.yandex.net/i?id=203303021d8cb730af39596756b0385afa2df88a-10681994-images-thumbs&n=13',
                    name: 'Ramazan',
                },
                false, 
                () => alert('hey')
            )
        ], 
        styles)

        $R(element).find('h1').css('color', 'green')

        return element
    }
}