import React from 'react'
import './PlayFlow.css'
import flowStepOne from '../Assets/playFlow_1.svg'
import flowStepTow from '../Assets/playFlow_2.svg'
import flowStepThree from '../Assets/playFlow_3.svg'
import flowStepFour from '../Assets/playFlow_4.svg'
import flowStepFive from '../Assets/playFlow_5.svg'
import flowStepSix from '../Assets/playFlow_6.svg'
import vector1 from '../Assets/flowVector_1.svg'
import vector2 from '../Assets/flowVector_2.svg'
import { useNavigate } from 'react-router-dom'

function PlayFlow() {
    const history=useNavigate()
  return (
    <div style={{backgroundColor:"#F2F6FF"}}>
      <div className="container-fluid py-5">
            <h2 className='pt-5 pb-4 pb-md-5 flowTitle text-center'>プレイの流れ</h2>
        <div className="row justify-content-center PadBothside">
            <div className="col-lg-5">
                <div className="row justify-content-center leftSidebg py-4">
                    <div className="col-lg-12">
                        <div className="flowImgUpper d-flex align-items-center gap-4">
                            <img src={flowStepOne} alt="#" className='flowImmg' />
                            <div>
                            <button className='stp1Button mt-2' >ステップ1</button>
                            <h4 className='joinFree forred mt-4' onClick={()=>(history('/RegisterationTab'),window.scrollTo({top:0,behavior:'instant'}))} >無料会員登録</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="stepDetailsUpper text-start d-flex justify-content-end">
                            <p className='joinDetails mt-2'>ウェブガチャの利用には会員登録が必要です。必要事項を入力いただき、ご登録頂ければすぐにウェブガチャをご利用できます。</p>
                        </div>
                    </div>
                </div>

                <>
                    <img src={vector2} alt="" className='turnVector btween' />
                </>
            </div>

            <div className='col-lg-1 btween px-0 d-flex justify-content-center' style={{width:"3%"}}>
                <img src={vector1} alt="#" className='fstLine btween' />
            </div>

            <div className="col-lg-5 bluHand">
            <div className="row justify-content-center RightSidebg py-4">
                    <div className="col-lg-12">
                        <div className="flowImgUpper d-flex align-items-center gap-4">
                            <img src={flowStepTow} alt="#" className='flowImmg w-100' />
                            <div>
                            <button className='stp1Button mt-2'>ステップ2</button>
                            <h4 className='joinFree mt-4'>購入したいタイトルの選択</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="stepDetailsUpper text-start d-flex justify-content-end">
                            <p className='joinDetails mt-2'>お好きなタイトルをお選びください。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-5 ForUpperSpc">
                <div className="row justify-content-center leftSidebg py-4">
                    <div className="col-lg-12">
                        <div className="flowImgUpper d-flex align-items-center gap-4">
                            <img src={flowStepThree} alt="#" className='flowImmg w-100' />
                            <div>
                            <button className='stp1Button mt-2'>ステップ3</button>
                            <h4 className='joinFree mt-4'>購入数・決済方法の選択</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="stepDetailsUpper text-start d-flex justify-content-end">
                            <p className='joinDetails mt-2'>プレイ回数（購入数）の選択をお願いいたします。決済方法はクレジットカードや各キャリア決済に対応しております。</p>
                        </div>
                    </div>
                </div>
                <>
                    <img src={vector2} alt="" className='turnVector btween' />
                </>
            </div>

            <div className='col-lg-1 btween px-0 d-flex justify-content-center' style={{width:"3%"}}>
                <img src={vector1} alt="#" className='fstLine btween' />
            </div>

            <div className="col-lg-5 bluHand">
            <div className="row justify-content-center RightSidebg py-4">
                    <div className="col-lg-12">
                        <div className="flowImgUpper d-flex align-items-center gap-4">
                            <img src={flowStepFour} alt="#" className='flowImmg w-100' />
                            <div>
                            <button className='stp1Button mt-2'>ステップ4</button>
                            <h4 className='joinFree mt-4'>プレイ！</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="stepDetailsUpper text-start d-flex justify-content-end">
                            <p className='joinDetails mt-2'>購入頂いた回数分プレイすることができます。どんなグッズが当選するかはお楽しみに！</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-5 ForUpperSpc">
                <div className="row justify-content-center leftSidebg py-4">
                    <div className="col-lg-12">
                        <div className="flowImgUpper d-flex align-items-center gap-4">
                            <img src={flowStepFive} alt="#" className='flowImmg w-100' />
                            <div>
                            <button className='stp1Button mt-2'>ステップ5</button>
                            <h4 className='joinFree mt-4'>賞品の発送</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="stepDetailsUpper text-start d-flex justify-content-end">
                            <p className='joinDetails mt-2'>当選された賞品は、ご登録頂いた情報をもとに発送を行います。発送のタイミングはタイトルによって異なりますのでご注意ください。</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-lg-1 btween px-0 d-flex justify-content-center' style={{width:"3%"}}>
                <img src={vector1} alt="#" className='fstLine btween' />
            </div>

            <div className="col-lg-5 bluHand">
            <div className="row justify-content-center RightSidebg py-4">
                    <div className="col-lg-12">
                        <div className="flowImgUpper d-flex align-items-center gap-4">
                            <img src={flowStepSix} alt="#" className='flowImmg w-100' />
                            <div>
                            <button className='stp1Button mt-2'>ステップ6</button>
                            <h4 className='joinFree mt-4'>品の到着</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="stepDetailsUpper text-start d-flex justify-content-end">
                            <p className='joinDetails mt-2'>実際にWEB上で当選した賞品がご登録いただいている住所に届きます！</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='mt-5 d-flex justify-content-center pb-5'>
           <button className='lastBtnn' onClick={()=>(history('/ListOTaprize'),window.scrollTo({top:0,behavior:'instant'}))}>ウェブガチャ一覧はコチラ</button>
        </div>

      </div>
    </div>
  )
}

export default PlayFlow
