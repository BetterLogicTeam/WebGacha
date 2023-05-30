import React from 'react'
import Tarpize_single from '../Tarpize_single/Tarpize_single'
import Tarpize_all_cards from '../Tarpize_all_cards/Tarpize_all_cards'
import Taprize_single_main_card from '../Taprize_single_main_card/Taprize_single_main_card'
import D_info from '../D_info/D_info'

export default function Tarpize_single_full_page() {
  return (
    <div>
    <Tarpize_single/>
    <Tarpize_all_cards/>
    <D_info/>
    {/* <Taprize_single_main_card/> */}
    
    </div>
  )
}
