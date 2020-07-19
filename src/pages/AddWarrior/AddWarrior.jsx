import React from 'react';

import Form from '../../components/Form';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const AddWarrior = () => {
  useDocumentTitle('Dodaj wojownika');
  return <Form />;
};

export default AddWarrior;
