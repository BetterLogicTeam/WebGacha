import React from 'react'
import './ConfimYourRegistration.css'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#2300F8',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  
function ConfimYourRegistration() {
  return (

    <div className="container ConfimYourRegistrationBg">
        <div className="row justify-content-center mb-5">
            <div className="col-9 text-start">
                <p className='comfim_p my-3'>
                本ページで住所などの変更を行っても、注文された賞品の発送先の情報は変更されません。発送先は、注文時の情報となり <br/>
                ますので、変更されたい場合は <span className='colorofspan'>お問い合わせ</span>よりお問い合わせください。
                 </p>
            </div>
        </div>

        <div className="row justify-content-center ">
        <div className="col-5 col-md-2 notataion_border p-3 border_table tableBg">
          <p> お名前（フリガナ） </p>
        </div>
        <div className="col-7 notataion_border p-3 border_table1 tableBg">
          <p className="T_p">
            <span className='me-3'>お名前</span> <span className='ms-5'>フリガナ </span>
            <br />
            <pan> 山田 太郎 </pan> <span className='ms-5'> ヤマダ タロウ </span>
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 col-md-2 notataion_border p-3 tableBg">
          <p> 住所 </p>
        </div>
        <div className="col-7 notataion_border p-3 tableBg">
          <p className="T_p">
          〒100 0001 <br />
青森県 品川区 西五反田 1-1-11 <br />
五反田マンション 101号室
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p> 生年月日 </p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">1995年11月09日</p>
        </div>
      </div>
      <div className="row  justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p> 性別 </p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p"> 女性 </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p> 電話番号 </p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">090 1234 5678 </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p> メールアドレス </p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">elunub3@gmail.com</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p> パスワード </p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">************ </p>
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-5 tableBg col-md-2 notataion_border p-3 border_table2 ">
          <p> メールマガジン </p>
        </div>
        <div className="col-7 tableBg notataion_border p-3 border_table3">
          <p className="T_p"> 受け取る </p>
        </div>
      </div>


<div className="row justify-content-center mt-5 ">

      <div className=' col-9  inputbtn'>
      <div className="d-flex justify-content-between rssssssspomm">

     
        <button className='red_buttonnn '> 変更する

        </button>

<p className='aligment'>
プライバシーモード 

 <span className='ps-3'> 
 <FormControlLabel
        // label="iOS style"
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
      />

 </span> 
</p>

      </div>
      </div>
</div>

    </div>

  )
}

export default ConfimYourRegistration