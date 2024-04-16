import React from 'react'
import {NavLink, withRouter} from "react-router-dom"
import {Dropdown} from "react-bootstrap"
import logo_png from "../assets/logo.png"
import "./CustomNav.css"


var main_dish_menu =
    [
        {Name: "Noodle", JapaneseName: "めん"},
        {Name: "Sushi Roll & cone", JapaneseName: "寿司ロール＆コーン"},
        {Name: "Sashimi", JapaneseName: "刺身"},
        {Name: "Giant roll", JapaneseName: "巨大ロール"},
        {Name: "Special Rolls(Per Piece)", JapaneseName: "スペシャルロール（１本あたり"},
        {Name: "Special Rolls(5 pcs)", JapaneseName: "特殊ロール（5個）"},
        {Name: "Tempura", JapaneseName: "天ぷら"},
        {Name: "Salad & Soup", JapaneseName: "サラダ＆スープ"},
        {Name: "Side", JapaneseName: "別の"},
    ];
var drinks_menu =
    [{Name: "Crafted Beer", JapaneseName: "細工されたビール"},
        {Name: "Wine", JapaneseName: "ワイン"},
        {Name: "Cocktail", JapaneseName: "カクテル"}];

var main_menu =
    [
        {Name: "Chef Select", JapaneseName: "シェフセレクト", Submenu:null, Link:"/chef-select"},
        {Name: "Main Dish", JapaneseName: "メインディッシュ", Submenu:main_dish_menu, Link:"/main-dish"},
        {Name: "Appetizer", JapaneseName: "前菜", Submenu:null, Link:"/appetizers"},
        {Name: "Dessert", JapaneseName: "デザート", Submenu:null, Link:"/dessert"},
        {Name: "Drink", JapaneseName: "ドリンク", Submenu:drinks_menu, Link:"/drinks"}];

const HomeLogoButton = withRouter(({ history }) => (
    <div className={"home-logo-button"}  onClick={() => { history.push('/') }}>
            <img src={logo_png}/>
    </div>
))


/* MenuButton.jsx */
class MenuButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            open: this.props.open? this.props.open:false,
            color: this.props.color? this.props.color:'black',
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
            this.setState({open:nextProps.open});
        }
    }

    handleClick(){
        this.setState({open:!this.state.open});
    }

    render(){
        const styles = {
            container: {
                height: '48px',
                width: '48px',
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '4px',
                margin: "auto 0"
            },
            line: {
                height: '2px',
                width: '20px',
                background: this.state.color,
                transition: 'all 0.2s ease',
            },
            lineTop: {
                transform: this.state.open ? 'rotate(45deg)':'none',
                transformOrigin: 'top left',
                marginBottom: '5px',
            },
            lineMiddle: {
                opacity: this.state.open ? 0: 1,
                transform: this.state.open ? 'translateX(-16px)':'none',
            },
            lineBottom: {
                transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
                transformOrigin: 'top left',
                marginTop: '5px',
            },
        }
        return(
            <div style={styles.container}
                 onClick={this.props.onClick ? this.props.onClick:
                     ()=> {this.handleClick();}}>
                <div style={{...styles.line,...styles.lineTop}}/>
                <div style={{...styles.line,...styles.lineMiddle}}/>
                <div style={{...styles.line,...styles.lineBottom}}/>
            </div>
        )
    }
}
class FullNavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu_dropdown_open: false,
            prevent_global_handling:false,
            submenu_id_level_2:-1
        };
        this.node = React.createRef();
        this.handleMenuMouseClicks = this.handleMenuMouseClicks.bind(this);
        this.handleGlobalMouseClicks = this.handleGlobalMouseClicks.bind(this);
        this.handleClickNavLink = this.handleClickNavLink.bind(this);

    }
    handleClickNavLink = (e, Submenu, scrollToTop) => {
        if (Submenu != null) e.preventDefault();
        else {
            this.setState({menu_dropdown_open: false});
        }

        if (scrollToTop) {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera}
        }
    }
    handleMenuMouseClicks(){
        this.setState(prevState => ({
            menu_dropdown_open: !prevState.menu_dropdown_open,
            prevent_global_handling:true
        }));
    }
    handleGlobalMouseClicks(e){
        if(!this.node.contains(e.target) && !this.state.prevent_global_handling)
            this.setState(prevState => ({
                menu_dropdown_open: false
            }));

        this.setState(prevState => ({
            prevent_global_handling: false
        }));
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleGlobalMouseClicks,false);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleGlobalMouseClicks,false);
    }
    handleHoverSubmenu(subMenuKey){
        console.log(subMenuKey);
        this.setState({
            submenu_id_level_2: subMenuKey
        });
    }

    render() {

        var submenu_items_level_1 = [];
        var submenu_items_level_2 = [];

        submenu_items_level_1 = main_menu.map((item, key)=>{
            if(item.Submenu!=null){
                console.log(submenu_items_level_2)
                submenu_items_level_2[key] = (item.Submenu.map((item, key_l2)=>{
                    return <div className={`submenu-item for-l1-item-${key} submenu-item-${key_l2}`}>
                        <div className={"english-text"}>{item.Name}</div>
                        <div  className={"japanese-text"}>{item.JapaneseName}</div>
                    </div>;
                    }

                ));
            }

            return <div  onMouseOver  ={()=>{this.handleHoverSubmenu(key);}}  onClick={(e)=>{
                this.handleClickNavLink(e,null, true);

            }}>
                <NavLink to={item.Link} className={`submenu-item submenu-item-${key}`} >
                <div className={"english-text"}>{item.Name}</div>
                <div  className={"japanese-text"}>{item.JapaneseName}</div>
                </NavLink></div>;
        });

        return <div className={"navbar-custom full-desktop-navbar"}>
            <div className={"nav-links-container"}>
                <HomeLogoButton/>
                <div style={{    display: "block", margin: "auto 0"}}><NavLink to={"/chef-select"} ref={node => { this.menuButton = node; }} className={`menu-dropdown ${(this.state.menu_dropdown_open) ? "open" : ""}` }  onClick={(e)=>{this.handleMenuMouseClicks();this.handleClickNavLink(e,true, true);}}>Menu</NavLink></div>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/news"}>News</NavLink>

                {/*//TODO: replace link here*/}
                <a className={"order-now-link"} href={"http://gloriafoods.com/"}>Order Now</a>
                <NavLink className={"download-app-button"} to={"/download-app"}>Download our App</NavLink>
            </div>
            <div ref={node => { this.node = node; }} className={`dropdown-container ${(this.state.menu_dropdown_open) ? "visible" : ""}`}>
                <div className={"submenu-level-1"}>
                    {submenu_items_level_1}
                </div>
                <div className={"submenu-level-2"}>
                    {submenu_items_level_2[this.state.submenu_id_level_2]}
                </div>
            </div>

        </div>;
    }
}

class MobileNavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            menuOpen:false,
            subMenuOpen: [],
            subMenuL1Open: false
        }

        var submenuOpenState =this.state.subMenuOpen;
        main_menu.map((item, key)=>{

            if(item.Submenu!=null)
                submenuOpenState[key]=false;
        });
        this.setState({subMenuOpen: submenuOpenState});
        this.handleClickNavLink = this.handleClickNavLink.bind(this);

    }
    handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
    }
    handleClickNavLink = (e, Submenu, scrollToTop) => {
        if (Submenu != null) e.preventDefault();
        else {
            this.setState({menuOpen: false});
            this.setState({subMenuL1Open: false});
        }

        if (scrollToTop) {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera}
        }
    }
    render() {
        var submenu_items_level_1 = [];
        var submenu_items_level_2 = [];
        submenu_items_level_1 = main_menu.map((item, key)=>{
            if(item.Submenu!=null){
                console.log(submenu_items_level_2 );



                submenu_items_level_2[key] = (item.Submenu.map((item_l2, key_l2)=>{
                        return <NavLink to={item.Link} className={`submenu-item for-l1-item-${key} submenu-item-${key_l2}`}  onClick={(e)=>{

                            this.handleClickNavLink(e,null, true);
                        }}>
                            <div className={"english-text"}>{item_l2.Name}</div>
                            <div  className={"japanese-text"}>{item_l2.JapaneseName}</div>
                        </NavLink>;
                    }

                ));
            }
            var submenu_level_2;
                if(submenu_items_level_2[key]!=null){
                    submenu_level_2 = <div className={"submenu-level-2-container"} style={{ display:(this.state.subMenuOpen[key])?"block":"none"}}>
                        {submenu_items_level_2[key]}
                    </div>;
                }
                else{
                    submenu_level_2 = <div></div>;
                }

            return <div className={"nav-link-container"} >
                <NavLink to={item.Link} className={`submenu-item submenu-item-${key}`}  onClick={(e)=>{
                    var subMenuStat = this.state.subMenuOpen;
                    subMenuStat[key]=!subMenuStat[key];
                    console.log(key," : ",subMenuStat[key]);
                    this.setState({subMenuOpen:subMenuStat});

                    this.handleClickNavLink(e,item.Submenu);

                }}>
                    <div className={"english-text"}>{item.Name}</div>
                    <div  className={"japanese-text"}>{item.JapaneseName}</div>
                </NavLink>


                {submenu_level_2}

            </div>;
        }

        );


    return <div className={"navbar-mobile-parent"}>
        <div className={"navbar-custom mobile-navbar"} style={{color:"white"}}>
            <HomeLogoButton/>
            <MenuButton open={this.state.menuOpen} onClick={(e)=>{this.handleMenuClick();
                }} color='white'/>
        </div>
        <div className={"main-menu-links-container"}  style={{display:(this.state.menuOpen)?"block":"none"}}>
            <div className={"main-menu-inner-container"}>
                <div className={"Mobile-Menu-dropdown"} onClick={(e)=>{this.setState({subMenuL1Open: !this.state.subMenuL1Open});}}>Menu</div>
                <div  className={"submenu-level-1-container"}   style={{display:(this.state.subMenuL1Open)?"block":"none"}} >{submenu_items_level_1}</div>


                <NavLink to={"/contact"} onClick={(e)=>{this.handleClickNavLink(e,null, true);}}>Contact</NavLink>
                <NavLink to={"/news"} onClick={(e)=>{this.handleClickNavLink(e,null, true);}}>News</NavLink>

                {/*//TODO: replace link here*/}
                <a className={"order-now-link"} href={"http://gloriafoods.com/"}>Order Now</a>
                <NavLink className={"download-app-button"} to={"/download-app"} onClick={(e)=>{this.handleClickNavLink(e,null, true);}}>Download our App</NavLink>
            </div>
        </div>

    </div>
        ;
    }
}


class CustomNav extends React.Component{
    render() {
        return (
            <div className={"navbar-container"}>
               <FullNavBar/>
               <MobileNavBar/>
            </div>
        );
    }
}

export default CustomNav;