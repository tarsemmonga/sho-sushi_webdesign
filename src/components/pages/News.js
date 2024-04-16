import React from 'react';
import '../../App.css';
import './News.css'
import {FooterWithSocials} from "../../footers/Footers";
import {Card,Button,Modal} from 'react-bootstrap'
import firebase from "firebase";
import { Markup } from 'interweave';

//TODO: Add Props
function DetailedPost(props){
    return <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>{props.Title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <img src={props.ImageSrc}/>
        </Modal.Body>

        <Modal.Footer>

            <Markup content={props.Text} />
        </Modal.Footer>
    </Modal.Dialog>;
}
async function getData(stateCallback, param_id){
    const snapshot = await firebase.firestore().collection('/news').get();
    console.log("snapshot",snapshot.docs.map(doc => {var document = doc.data(); document.Id = doc.id; return document;}))
    stateCallback(snapshot.docs.map(doc => {var document = doc.data(); document.Id = doc.id; return document;}));

}



function copyToClipboard( e,text){
    var aux = document.createElement("input");
    aux.setAttribute("value", text);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    alert("Link Copied to the clipboard Successfully");
    e.preventDefault();
}


 function NewsPage(request) {

    const [showModal, setShowModal] = React.useState(false);
    const [defShownModal, setDefShownModal] = React.useState(false);

    const[bannerSrc,setBannerSrc] = React.useState("");
    const[bannerTitle,setBannerTitle] = React.useState("");
    const[bannerText,setBannerText] = React.useState("");
     const[news,setNews] = React.useState(null);

     var callbackForGetNews = (news_list)=>{
         setNews(news_list);

         if(news_list!=null && request.match.params.id!=undefined){
             var matching_news = news_list.find((doc)=>{return doc.Id == request.match.params.id});
             console.log("match", matching_news)
             if(matching_news!=undefined){
                 setBannerTitle(matching_news.NewsTitle)
                 setBannerSrc(matching_news.NewsImage)
                 setBannerText(matching_news.NewsBody)
                 setShowModal(true);
                 console.log("Shown")
             }
     }};
     if(news==null)
       getData(callbackForGetNews);


    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);



    var cards = []
    if(news!=null)
    for (var i = 0; i < news.length; i++) {
        console.log("Index",i, news,news[i]);
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        var newsPost =
            {   Id: news[i].Id,
                NewsTitle:news[i].NewsTitle,
                NewsImage:news[i].NewsImage,
                NewsBody:news[i].NewsBody

            };
        cards.push(<Card style={{ width: '18rem' }} onClick={()=>{

            setBannerTitle(newsPost.NewsTitle)
            setBannerSrc(newsPost.NewsImage)
            setBannerText(newsPost.NewsBody)
            setShowModal(true);
        }}>
            <Card.Img variant="top" src={news[i].NewsImage}/>
            <Card.Body>
                <Card.Title>{news[i].NewsTitle}</Card.Title>
                <Button variant="primary" onClick={(e)=>{ copyToClipboard(e,window.location.origin+'#/news/'+newsPost.Id); }}><i className="fa fa-share-alt" aria-hidden="true"></i></Button>
            </Card.Body>
        </Card>);
    }





    return (
        <div className={"news-content-container"}>
            <div className={"news-cards-container"}>
                {cards}

            </div>

            <Modal show={showModal} onHide={handleClose}>
             <DetailedPost Title={bannerTitle}  ImageSrc={bannerSrc} Text ={bannerText} />
            </Modal>
            <FooterWithSocials/>
        </div>
    );
}


export default NewsPage;