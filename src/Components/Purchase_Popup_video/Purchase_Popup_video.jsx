import { Button, Modal } from "antd";
import { useState } from "react";
import ReactPlayer from "react-player";
import "./Purchase_Popup_video.css";
import { useNavigate } from "react-router-dom";

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
    window.scrollTo(0, 0)

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
          url="./_Cartoon88.mp4"
          width="100%"
          onEnded={() => myCallback()}
        />
      </Modal>
    </>
  );
}
