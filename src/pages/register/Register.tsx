import React from 'react';
import Modal from 'components/modal/Modal';
import Terms from './components/terms/Terms';
import SelectRegion from './components/region/SelectRegion';

export default function Register() {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <h1>Register</h1>
      {isModalOpen && (
        <Modal>
          <SelectRegion contents="gathering" />
        </Modal>
      )}
    </>
  );
}
