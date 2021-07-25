import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const FirstPage = () => {
  const [dogList, setDogList] = useState([]);
  const [dogListState] = useTypedSelector((state) => [state.dogList]);
  const { fetchDogList } = useActions();

  useEffect(() => {
    console.log(dogListState);
    fetchDogList();
  }, []);

  useEffect(() => {
    if (checkIfEmptyObj(dogListState.data.message)) {
      console.log(checkIfEmptyObj(dogListState.data.message));
      console.log(dogListState.data);
    } else if (dogListState.loading === true) {
      console.log('loading');
    } else {
      console.log('loaded');
      console.log(dogListState.data);
      setDogList(Object.keys(dogListState.data.message));
    }
  }, [dogListState]);

  useEffect(() => {
    console.log(dogList);
  }, [dogList]);

  const checkIfEmptyObj = (obj) => obj && Object.keys(obj).length === 0
                                       && obj.constructor === Object;

  return (
    <div>
      {
        dogList.map((dogBreed) => <p>{dogBreed}</p>)
      }
    </div>
  );
};

export default FirstPage;
