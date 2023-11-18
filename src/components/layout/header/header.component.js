import ChildComponent from '@/core/component/child.component';
import renderService from "@/core/services/render.service";
import template from "./header.template.html";
import styles from "./header.module.scss";
import { Logo } from './logo/logo.component';
import { LogoutButton } from './logout-button/logout-button.component';
import { Search } from './search/search.component';
import { UserItem } from '@/components/ui/user-item/user-item.component';
import { Store } from '@/core/store/store';
import { $R } from '@/core/rquery/rquery.lib';

export class Header extends ChildComponent{
    constructor({router}){
        super()

        this.store = Store.getInstance()
        this.store.addObserver(this)

        this.router = router
    }

    update() {
        this.user = this.store.state.user

        const authSideElement = $R(this.element).find('#auth-side')

        if(this.user) {
            authSideElement.show()
            this.router.navigate('/')
        } else {
            authSideElement.hide()
        }
    }

    render() {
        this.element = renderService.htmlToElement(template, [
            Logo, 
            new LogoutButton({
                router: this.router
            }), 
            Search, 
            new UserItem({
                avatarPath: 'https://avatars.mds.yandex.net/i?id=203303021d8cb730af39596756b0385afa2df88a-10681994-images-thumbs&n=13',
                    name: 'Ramazan'
            }) 
        ], styles)

        this.update()
        return this.element
    }
}