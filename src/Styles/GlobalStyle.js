import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    body{
        background: black;
    }
    a{
        text-decoration: none;
    }

    // main container
    .main-container{
        margin-top: 96px;
    }

    // COMMON COMPONENTS...
    .common-btn{
        padding: 10px 20px;
        border: none;
        outline: none;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        background-image: linear-gradient(to right, #d4f938 0%, #AEF146 51%, #32D875 100%);
        box-shadow: rgba(211, 250, 56, 0.5) 0px 1px 12px, rgba(173, 241, 70, 0.5) 0px 1px 12px, rgba(48, 217, 116, 0.5) 0px 1px 12px;
    }
    .common-span{
        color: #EBFF25;
    }
    .common-h1{
        font-size: 72px;
        color: white;
    }
    .common-p{
        font-size: 24px;
        color: #A9A9A9;
    }
    // END 

// Navbar styling....
    .navbar{
        height: 96px;
        background: black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 150px;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        // border-bottom: 1px solid #98ED4E;
        box-shadow: rgba(153, 237, 79, 0.4) 0px 0px 0px 0.5px;
        z-index: 100;
    }
    .navbar a{
        color: white;
    }
    .links{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    // End 

    // Component-1 Styling....
    .component-1{
        width: 80%;
        margin: auto;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: black;
    }
    .component-1 .text-content{
        margin-top: 50px;
        text-align: center;
    }
    .text-content .title{
        font-size: 96px;
    }
    .text-content p{
        margin: 20px 0px 40px;
        font-size: 24px;
        color: #A9A9A9;
    }
    .img-div{
        // border: 1px solid white;
        display: flex;
        align-items: center;
        margin-bottom: 80px;
    }
    
    // component-2 styling..
    .component-2{
        width: 80%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background: black;
    }
    .stats-cards{
        // border: 1px solid red;
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px 0px;
        box-shadow: rgba(153, 237, 79, 0.5) 0px 0px 0px 0.5px, rgba(211, 250, 56, 0.5) 0px 0px 0.5px;
    }
    .details-card{
        border-right: 1px solid rgba(233, 255, 36, 0.2);
        color: white;
        width: 253.5px;
        text-align: center;
        padding: 5px;
    }
    .details-card:nth-child(4){
        border: none;
    }
    .details-card h1{
        color: #EBFF25;
    }
    .details-card p{
        color: #A9A9A9;
        margin-top: 5px;
    }
    // End of styling..

    // component-3 styling...
    .component-3{
        width: 80%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .endless-possibility{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 80px;
        margin: 80px 0px 180px;
    }
    // End of styling...

    // Component-4 Styling...
    .component-4{
        width: 80%;
        margin: auto;
    }
    .tradeMore-text{
        // border: 1px solid white;
        color: white;
        text-align: center;
        margin: 80px 0px 60px;
    }
    .tradeMore-text h1{
        margin-block: 10px;
    }
    
    .tradeMore-text p{
        font-size: 24px;
        color: #A9A9A9;
    }
    .all-cards-tradeMore{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .tradeMore-cards{
        position: relative;
        width: 368.67px;
        height: 438px;
        color: white;
        backround: transparent;
        margin-bottom: 100px;
    }
    .tradeMore-cards .frame{
        position: absolute;
        background: rgba(255, 255, 255, 0.1);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
    }
    .tradeMore-cards .coinDCX-card, .tradeMore-cards .density-card, .tradeMore-cards .deltaExchange-card{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 80px;
        text-align: center;
        z-index: 2;
    }
    .coinDCX-card p{
        color: #A9A9A9;
    }
    .density-card{
        background-image: linear-gradient(to bottom, #d4f938 0%, #AEF146 51%, #32D875 100%);
        box-shadow: rgba(211, 250, 56, 0.5) 8px 4px 20px 2px, rgba(173, 241, 70, 0.5) 0px 4px 20px 2px, rgba(48, 217, 116, 0.5) 0px 4px 20px 2px;
    }
    .density-card .logo-img, .density-card .div-1{
        z-index: 20;
        color: black;
    }
    .tradeMore-cards .frame:nth-child(2){
        z-index: 10;
    }
    // End of styling...

    // component-5 styling...
    .component-5{
        width: 80%;
        margin: auto;
    }
    .explore_market{
        margin-block: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .explore_market .explore_market-text{
        color: white;
        text-align: center;
        margin-bottom: 50px;
    }
    .explore_market-text h1{
        margin-bottom: 20px;
    }
    .explore_market-text p{
        font-size: 24px;
        color: #A9A9A9;
    }
    .explore_market .explore_market-graph-img{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
    // End of styling...


    // component-6 styling..
    .component-6{
        // border: 1px solid white;
        width: 80%;
        margin: auto;
    }
    .component-6 .new_frontiers{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-block: 100px;
    }
    .new_frontiers .title-text{
        text-align: center;
    }
    .title-text p{
        margin-block: 20px;
    }
    .new_frontiers .other-stats{
        border: 1px solid grey;
        display: flex;
        margin-block: 80px;
        padding-block: 30px;
        border-radius: 7px;
    }
    .other-stats .stats-card{
        width: 285px;
        text-align: center;
        border-right: 1px solid grey;
    }
    .stats-card:nth-child(4){
        border: none;
    }
    .stats-card h1{
        color: white;
    }
    // End of styling...


    // component-7 styling...
    .component-7{
        width: 100%;
        height: 942px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .component-7 .start_small{
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .start_small .start_small-text{
        text-align: center;
        margin-bottom: 80px;
    }
    .start_small-text h1{
        font-size: 72px;
    }
    .start_small-text p{
        font-size: 24px;
        color: #333333;
        margin-block: 20px;
    }
    .start_small-cards{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .start_small-cards .card{
        width: 553px;
        height: 450px;
        display: flex;
        position: relative;
    }
    .card .behind-frame{
        position: absolute;
        top: 0;
        right: 0;
        // width: 100%;
        height: 100%;
    }
    .card .main-content{
        width: 100%;
        height: 100%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        background: rgba(102, 102, 102, 0.1);
    }
    .main-content .logo-25, .main-content .manager_1{
        margin: 30px 0px 80px;
    }
    .main-content .content h1{
        font-size: 40px;
        margin-bottom: 20px;
    }
    // End of styling...


    // component-8 styling..
    .easy_steps{
        margin: 100px 0px;
        text-align: center;
    }
    .easy_steps .three-steps{
        margin: 100px 0px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .three-steps .step{
        width: 55%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: 80px;
        border-bottom: 1px solid rgba(233, 255, 36, 0.2);
    }
    .step:nth-child(3){
        border: none;
    }
    .step .step-details{
        color: white;
        text-align: left;
    }
    .step-details h1{
        margin: 25px 0px;
        font-size: 40px
    }
    .step-details p{
        color: #a1a1a1;
        margin-bottom: 30px;
    }
    // End of styling....

    // component-9 styling...
    .backed_by_best{
        width: 60%;
        margin: 100px auto;
        text-align: center;
    }
    .backed_by_best .companies-logos{
        // border: 1px solid white;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 80px;
        margin-block: 60px;
    }
    .backed_by_best .people-imgs{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin-block: 50px;
    }
    .people-imgs div .name{
        color: white;
        margin: 10px 0px 5px;
    }
    .people-imgs div .post{
        color: #a9a9a9;
        font-size: 10px;
    }
    // End of Styling...


    // component-10 styling
    .component-10{
        height: 915px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
    }
    .people_review{
        border: 1px solid black;
        width: 80%;
        text-align: center;
    }
    .people_review-text h1{
        color: black;
    }
    .people_review-text p{
        color: #333333;
    }
    .review-cards{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .review-card{
        border: 1px solid black;
        width: 362px;
        height: 450px;
        display: flex;
        flex-direction: column;
        // position: relative;
    }
    





    // Footer styling
    .footer{
        width: 100%;
        height: 360px;
        background: #229851;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }
    .footer a{
        color: white;
        margin-inline: 20px;
    }
`;