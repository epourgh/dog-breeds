import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import styles from '../styles/_home.module.scss';

const FirstPage = () => {
  const [inputState, setInputState] = useState('');
  const [dogList, setDogList] = useState({ message: { 0: { key: 0, name: 'breed', image: 'img' } } });
  const [dogListState] = useTypedSelector((state) => [state.dogList]);
  const { fetchDogList } = useActions();

  useEffect(() => {
    console.log(dogListState);
    if (localStorage.getItem('dogList')) {
      console.log('exists in storage');
      console.log(localStorage.getItem('dogList'));
      setDogList(JSON.parse(localStorage.getItem('dogList')));
      return;
    }
    fetchDogList();
  }, []);

  useEffect(async () => {
    if (localStorage.getItem('dogList')) {
      return;
    }

    if (checkIfEmptyObj(dogListState.data.message)) {
      console.log(checkIfEmptyObj(dogListState.data.message));
      console.log(dogListState.data);
    } else if (dogListState.loading === true) {
      console.log('loading');
    } else {
      console.log('loaded');

      const dogList = dogListState.data;
      console.log(dogList);

      await delay(5000);

      const stringifyDogList = JSON.stringify(dogList);
      console.log(stringifyDogList);

      localStorage.setItem('dogList', stringifyDogList);

      setDogList(dogList);
    }
  }, [dogListState]);

  useEffect(() => {
    console.log('check dog list');
    console.log(dogList);
  }, [dogList]);

  const checkIfEmptyObj = (obj) => obj && Object.keys(obj).length === 0
                                       && obj.constructor === Object;

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  return (
    <div>
      <div className={styles.inputWrapper}>
        <input
          placeholder="Search by breed"
          value={inputState}
          onChange={(e) => setInputState(e.target.value.toLocaleLowerCase())}
          className={styles.inputSearchStyle}
        />
      </div>
      <div className={styles.imageWrapper}>
        {
          Object.values(dogList.message).filter((dogBreed) => inputState === '' || dogBreed.name.includes(inputState)).map((dogBreed) => (
            <div className={styles.imageContainerStyle}>
              {dogBreed.image !== 'img' ? <img src={dogBreed.image} className={styles.imageStyle} /> : <></>}
              <p>{dogBreed.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FirstPage;
