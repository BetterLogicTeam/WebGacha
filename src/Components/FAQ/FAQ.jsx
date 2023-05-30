import React from 'react'
import "./FAQ.css"
import Accordion from 'react-bootstrap/Accordion';
export default function FAQ() {
  return (
    <div className='main_faq bg_clr'>
    <div className="main_faq_img">
        <h1>よくあるご質問</h1>
    </div>
    <div className="container my-4">
        <div className="row">
            <div className="col-md-3 side_bar">
                <ul className='ps-0 faq_ul'>
                    <li className='first_li text-white'>会員登録・ログインについて</li>
                    <li>商品について</li>
                    <li>ウェブガチャのプレイについて</li>
                    <li>メールの受信について</li>
                    <li>商品について</li>
                    <li>商品のお届けについて</li>
                    <li>お支払い方法について</li>
                </ul>
            </div>
            <div className="col-md-8">
                <h4 className='faq_heading'>会員登録・ログインについて</h4>
                <Accordion defaultActiveKey="0">
      <Accordion.Item className='faq_acc' eventKey="0">
        <Accordion.Header className='acc_header text_clr'>会員登録方法を教えて下さい。</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='faq_acc ' eventKey="1">
        <Accordion.Header className='acc_header text_clr'>会員登録は無料ですか？</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='faq_acc ' eventKey="2">
        <Accordion.Header className='acc_header text_clr'>会員登録内容の変更方法を教えて下さい。</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='faq_acc ' eventKey="3">
        <Accordion.Header className='acc_header text_clr'>会員登録をしなくてもプレイできますか？</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='faq_acc ' eventKey="4">
        <Accordion.Header className='acc_header text_clr'>携帯電話の機種変更をしても会員情報はそのまま利用出来ますか？</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='faq_acc ' eventKey="5">
        <Accordion.Header className='acc_header text_clr'>ログインができません。（メールアドレス、及びパスワードを忘れた場合）</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item>

<div className=' my-5'>

      <h4 className='faq_heading'>商品について</h4>


      <Accordion.Item className='faq_acc' eventKey="5">
        <Accordion.Header className='acc_header text_clr'>期間終了後の商品の再販売はありますか？</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='faq_acc ' eventKey="5">
        <Accordion.Header className='acc_header text_clr'>商品の販売終了日はいつですか？</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='faq_acc ' eventKey="8">
        <Accordion.Header className='acc_header text_clr'>商品の修理はできますか？</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className='faq_acc ' eventKey="9">
        <Accordion.Header className='acc_header text_clr'>プレゼント包装、もしくはショッパーはつけてもらえますか？</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item>




      {/* <Accordion.Item className='faq_acc ' eventKey="4">
        <Accordion.Header className='acc_header text_clr'>携帯電話の機種変更をしても会員情報はそのまま利用出来ますか？</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item> */}
      {/* <Accordion.Item className='faq_acc ' eventKey="5">
        <Accordion.Header className='acc_header text_clr'>ログインができません。（メールアドレス、及びパスワードを忘れた場合）</Accordion.Header>
        <Accordion.Body>
      <p className='text_clr acc_text'>お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい。</p>
        </Accordion.Body>
      </Accordion.Item> */}
      </div>
   
   
    </Accordion>



    {/* second part of acc  */}
    <div className='my-5'>

                <Accordion defaultActiveKey="0">
    
    </Accordion>
    </div>
            </div>
        </div>
    </div>

    
    </div>
  )
}
