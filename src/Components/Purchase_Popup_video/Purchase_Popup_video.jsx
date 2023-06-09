import { Button, Modal } from "antd";
import { useState } from "react";
import ReactPlayer from "react-player";
import "./Purchase_Popup_video.css";
import { useNavigate } from "react-router-dom";
import Video_Web from '../../Components/Assets/Video_Web.mp4'
export default function Purchase_Popup_video({
  showModal,
  setIsModalOpen,
  isModalOpen,
}) {
  const history = useNavigate();

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    history("/ListOfResults");
  };
  const myCallback = () =>{
    console.log('Video has ended')
    history("/ListOfResults");
    window.scrollTo({top:0,behavior:'instant'})

  } 
    
  return (
    <>
      <Modal
        className="tunu"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        centered
      >
        <ReactPlayer
          // loop={true}
          playing
          autoplay
          url={Video_Web}
          width="100%"
          onEnded={() => myCallback()}
        />
      </Modal>
    </>
  );
}
