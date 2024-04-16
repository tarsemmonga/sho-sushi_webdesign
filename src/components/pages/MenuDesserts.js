import React from 'react'
import MenuDessertsBannerImg from '../../assets/menu/desserts/menu-dessert-banner-image.png'
import {FooterWithSocials} from "../../footers/Footers";
import "./Menu.css"
import Slider from "react-slick"

// TODO: Add more menu item images here
import menu_item_1 from "../../assets/menu/chef-select/menu-item.png"

class MenuDesserts extends React.Component{

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
                <div className={"menu-container desserts-menu"}>
                    <div className={"menu-description-header"}>
                        <h1>Dessert</h1>
                        <h2>デザート</h2>
                        <p>on decades of experience and constant innovation to create a variety of
                            desirable and delicious offerings. From international pastry cakes, to single
                            portions, to gelato, fried gelato and so much more. Come discover our entire
                            range.</p>
                    </div>
                    <div className={"menu-content"}>
                        <div className={"menu-items-container"}>
                            <img src={MenuDessertsBannerImg}/>
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
export default MenuDesserts;