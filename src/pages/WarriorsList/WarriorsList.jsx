import React, { useContext } from 'react';

import { StateContext } from '../../providers/ContextProvider';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const WarriorsList = () => {
  const { warriors } = useContext(StateContext);

  useDocumentTitle('Moi wojownicy');

  return (
    <>
      <div>Hello from WarriorsList</div>
      {warriors.map(warrior => {
        if (warrior.isSelected) {
          return <div key={warrior.id}>{warrior.name}</div>;
        } else {
          return null;
        }
      })}
    </>
  );
};

export default WarriorsList;
