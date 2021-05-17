import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return <div>Modal</div>;
};

export default Modal;
