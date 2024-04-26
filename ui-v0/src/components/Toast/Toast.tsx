import React from 'react';
import { EToastType, IToastProps } from './toast.types.ts';
import { FC } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from 'react-icons/io5';

const Toasted: FC<IToastProps> = (props) => {
  const renderToastIcon = (type: EToastType) => {
    if (type === EToastType.ERROR) {
      return <IoCloseCircleSharp />;
    }

    return <IoCheckmarkCircleSharp />;
  };

  return (
    <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast>
            {renderToastIcon(props.type)}
            <Toast.Body>{props.text}</Toast.Body>
        </Toast>
    </ToastContainer>
  );
};

export default Toasted;
