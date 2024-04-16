import React from 'react'
import MenuMainDishesBannerImg from '../../assets/menu/main-dishes/menu-main-dish-banner-image.png'
import {FooterWithSocials} from "../../footers/Footers";
import "./Menu.css"
import Slider from "react-slick"

// TODO: Add more menu item images here
import menu_item_1 from "../../assets/menu/chef-select/menu-item.png"

class MenuMainDishes extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            slidesToShow:3
        };



        // TODO: Add more menu items here
        this.menu_items =  [{"Title": "Menu Item 1" , "ItemImage": menu_item_1},
            {"Title": "Menu Item 2" , "ItemImage": menu_item_1},
            {"Title": "Menu Item 3" , "ItemImage": menu_item_1},
            {"Title": "Menu Item 4" , "ItemImage": menu_item_1},
            {"Title": "Menu Item 5" , "ItemImage": menu_item_1},
            {"Title": "Menu Item 6" , "ItemImage": menu_item_1},
            {"Title": "Menu Item 7" , "ItemImage": menu_item_1},];


        this.menu_content = this.menu_items.map((item,key)=>
            <div className={"single-menu-item-container"}>
                <div className={"single-menu-item-image-container"}>
                    <img src={item.ItemImage}/>
                </div>
                <div className={"single-menu-item-description-container"}>
                    {item.Title}
                </div>
            </div>
        );


    }
    componentDidMount() {
        window.addEventListener("resize", this.resizeSlickScroller.bind(this));
        this.resizeSlickScroller();
    }

    resizeSlickScroller(){
        if(window.innerWidth<900){
            this.setState({
                slidesToShow:2
            });
        }
        else if(window.innerWidth>900){
            this.setState({
                slidesToShow:3
            });
        }

    }

    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: this.state.slidesToShow,
            slidesToScroll: 2
        };
        return (
            <div className={"menu-parent"}>
                <div className={"menu-container main-dishes-menu"}>
                    <div className={"menu-description-header"}>
                        <h1>Main Dish</h1>
                        <h2>メインディッシュ</h2>
                        <p>Perhaps the most complex and difficult part of making sushi is perfecting the rice. Sho Sushi uses a mix of Japanese short and medium grain rice, combined with Japanese red and white rice vinegars, Japanese sea salt and a small amount of sugar. The water has been purified with bincho-tan (Japanese charcoal). The rice is cooked in precise proportions at calculated temperatures for a specific time. Like scientists in a lab, Chef has refined their method after years of research and experimentation. Using their hands as instruments, they evaluate how moist the rice is before cooking it. They adjust the amount of water accordingly.</p>
                    </div>
                    <div className={"menu-content"}>
                        <div className={"menu-items-container"}>
                            <img src={MenuMainDishesBannerImg}/>
                            <Slider {...settings}>
                                {this.menu_content}
                            </Slider>
                        </div>




                    </div>
                </div>
                <FooterWithSocials/>
            </div>
        );
    }
}
export default MenuMainDishes;