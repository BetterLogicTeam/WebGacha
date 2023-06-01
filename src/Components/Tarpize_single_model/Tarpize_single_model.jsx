import React from "react";

import Modal from "react-bootstrap/Modal";
import "./Tarpize_single_model.css";
import cat from "../Assets/cat.png";

export default function Tarpize_single_model(props) {
  return (
    <div className="main_modal_tarpize">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
        <Modal.Body className="modla_content_main">
          <div className="model_main_content">
            <img src={cat} className="w-100" alt="" />
            <h5 className="modal_titlte">A-1 特大タオル</h5>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
      </Modal>
    </div>
  );
}
