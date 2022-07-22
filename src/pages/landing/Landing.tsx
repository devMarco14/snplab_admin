import React from 'react';
import Modal from 'components/modal/Modal';

export default function Landing() {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(true);
  return (
    <>
      <h1>Landing</h1>
      {isModalOpen && (
        <Modal>
          <Test />
        </Modal>
      )}
    </>
  );
}

function Test() {
  return (
    <article className="modalChild w-1/2 h-1/2 bg-white">
      <h1>Test</h1>
    </article>
  );
}
