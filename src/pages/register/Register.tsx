import React from 'react';
import Terms from './terms/Terms';
import SelectRegion from './region/SelectRegion';

export default function Register() {
  const [isModalOpen, setModalOpen] = React.useState<boolean>(false);

  return (
    <>
      <h1>Register</h1>
      <SelectRegion contents="gathering" />
    </>
  );
}
