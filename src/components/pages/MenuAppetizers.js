import React from 'react'
import MenuAppetizersBannerImg from '../../assets/menu/appetizers/menu-appetizer-banner-image.png'
import {FooterWithSocials} from "../../footers/Footers";
import "./Menu.css"
import Slider from "react-slick"

// TODO: Add more menu item images here
import menu_item_1 from "../../assets/menu/chef-select/menu-item.png"

class MenuAppetizers extends React.Component{

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
                <div className={"menu-container appetizers-menu"}>
                    <div className={"menu-description-header"}>
                        <h1>Appetizers</h1>
                        <h2>前菜</h2>
                        <p>While Sho sushi brings in ideas and food ethnic from all around the world and much from Japan, the chefs highly value outstanding local and regional varieties. Chef selects the fish one by one, evaluating each for freshness, size and its “spirit” or “energy.” They then carefully begin the comprehensive process of cleaning, preparing and storing. Paper-thin sheets of delicate Japanese cedar-wood line many of the boxes, and different varieties of fish are stored in separate boxes. The chefs carefully control the aging process of the fish—an essential part of making sushi. “Just-caught” fish is not always ideal for being eaten immediately as sushi, and different fish require different methods of refrigeration and storage for ideal preservation and taste.</p>
                    </div>
                    <div className={"menu-content"}>
                        <div className={"menu-items-container"}>
                            <img src={MenuAppetizersBannerImg}/>
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
export default MenuAppetizers;