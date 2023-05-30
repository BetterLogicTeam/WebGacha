import React from 'react'
import "./Tarpize_all_cards.css"
import Taprize_single_main_card from '../Taprize_single_main_card/Taprize_single_main_card'
import Single_tarpize_card from '../Single_tarpize_card/Single_tarpize_card'
import cat from "../Assets/cat.png";
import green from "../Assets/green.png"
import man from "../Assets/man.png"
import caat from "../Assets/caat.png"
import girls from "../Assets/girls.png"


export default function Tarpize_all_cards() {
  return (
    <div className='tarpize_cards_main'>
    <div className="tarpize_content_cards">
    <h2>賞品一覧</h2>
      <div className="fornt_row">
      <span className="yellow">
          <p className='m-0'>特別賞</p>
      </span>
      <h6>
      セクションのタイトル
      </h6>

      </div>



    </div>

    <Taprize_single_main_card/>


    <div className="fornt_row">
    <span className="blu_boxe">
        <p className='m-0'>A賞 :</p>
    </span>
    <h6>
    セクションのタイトル
    </h6>

    </div>
    <div className="container my-5">
      <div className="row m-0">
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={cat} a1="A-1"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={cat} a1="A-2"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={cat} a1="A-2"/>
        </div>
      </div>
    </div>



    <div className="fornt_row">
    <span className="blu_boxe" style={{backgroundColor:"#02D998"}}>
        <p className='m-0'>B賞  :</p>
    </span>
    <h6>
    セクションのタイトル
    </h6>

    </div>


    <div className="container my-5">
      <div className="row m-0">
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={green} a1="B-1"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={green} a1="B-2"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={green} a1="B-2"/>
        </div>
      </div>
      <div className="row m-0 mt-5">
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={green} a1="B-4"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={green} a1="B-5"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={green} a1="B-6"/>
        </div>
      </div>
    </div>


    <div className="fornt_row">
    <span className="blu_boxe" style={{backgroundColor:"#FFAA66"}}>
        <p className='m-0'>C賞  :</p>
    </span>
    <h6>
    セクションのタイトル
    </h6>

    </div>
    <div className="container my-5">
      <div className="row m-0">
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={man} a1="c-1"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={man} a1="c-2"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={man} a1="c-3"/>
        </div>
      </div>
      <div className="row m-0 mt-5">
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={man} a1="c-4"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={man} a1="c-5"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={man} a1="c-6"/>
        </div>
      </div>
      <div className="row m-0 mt-5">
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={man} a1="c-7"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={man} a1="c-8"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={man} a1="c-9"/>
        </div>
      </div>
    </div>



    <div className="fornt_row">
    <span className="blu_boxe" style={{backgroundColor:"#FF81D4"}}>
        <p className='m-0'>D賞  :</p>
    </span>
    <h6>
    セクションのタイトル
    </h6>

    </div>
    <div className="container my-5">
      <div className="row m-0">
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={caat} a1="D-1"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={caat} a1="D-2"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={caat} a1="D-2"/>
        </div>
      </div>
      <div className="row m-0 mt-5">
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={caat} a1="D-4"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={caat} a1="D-5"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={caat} a1="D-6"/>
        </div>
      </div>
    </div>



    <div className="fornt_row">
    <span className="blu_boxe" style={{backgroundColor:"#577FFF"}}>
        <p className='m-0'>E賞  :</p>
    </span>
    <h6>
    セクションのタイトル
    </h6>

    </div>~
    <div className="container my-5">
      <div className="row m-0">
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={girls} a1="E-1"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={girls} a1="E-2"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={girls} a1="E-2"/>
        </div>
      </div>
      <div className="row m-0 mt-5">
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={girls} a1="E-4"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={girls} a1="E-5"/>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <Single_tarpize_card card_p="特大タオル" carddimg={girls} a1="E-6"/>
        </div>
      </div>
    </div>

    
    
    </div>
  )
}
