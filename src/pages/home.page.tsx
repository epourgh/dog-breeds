import React, { useState, useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import styles from '../styles/_home.module.scss';

const FirstPage = () => {
  const [inputState, setInputState] = useState('');
  const [dogList, setDogList] = useState({ message: { 0: { key: 0, name: '', image: 'img' } } });
  const [dogListState] = useTypedSelector((state) => [state.dogList]);
  const { fetchDogList } = useActions();

  useEffect(() => {
    console.log(dogListState);
    if (localStorage.getItem('dogList')) {
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
      const dogList = dogListState.data;

      const stringifyDogList = JSON.stringify(dogList);

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

      {(dogListState.loading === true) 
        ? <div className={styles.textWrapper}><h2>Loading...</h2></div> 
        : <></>}

      {(inputState === '' || Object.keys(dogList.message).some((x) => x.includes(inputState))) ? <></> : (
        <div className={styles.textWrapper}>
          <p>
            No search results for a breed named
            {' '}
            {inputState}
            .
            {' '}
            <a href="https://github.com/jigsawpieces/dog-api-images#dog-api-images">Read</a>
            {' '}
            how to contribute to the API.
          </p>
        </div>
      )}

      <div className={styles.imageWrapper}>
        {
          Object.values(dogList.message).filter((dogBreed) => inputState === '' || dogBreed.name.includes(inputState)).map((dogBreed) => (
            <div className={styles.imageContainerStyle}>
              {dogBreed.image !== 'img' ? <img src={dogBreed.image} className={styles.imageStyle} alt={dogBreed.name} /> : <></>}
              <p>{dogBreed.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FirstPage;
