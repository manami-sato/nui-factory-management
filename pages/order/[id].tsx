import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Contents from '../../src/components/Contents';
import Nui from '../../src/components/Nui';
import { partsApi } from '../../src/libs/api';
import { partsType } from '../../src/types/apiType';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp, TARGET_COLLECTION_NAME } from '../../src/libs/firebase';

type Props = {
  id: string;
  partsApidata: partsType[];
};

const CONTENTS_NUMBER = 0;

const Home: NextPage<Props> = ({ id, partsApidata }) => {
  const [firebaseData, setFirebaseData] = useState<any>();
  const [firebaseId, setFirebaseId] = useState<string[]>();
  const [firebaseIndex, setFirebaseIndex] = useState<number>(0);
  useEffect(() => {
    const firebase = async () => {
      try {
        const db = getFirestore(firebaseApp);
        const col = collection(db, TARGET_COLLECTION_NAME);
        const querySnapshot = await getDocs(col);
        const ret: any = [];
        const retId: string[] = [];
        querySnapshot.forEach((doc) => {
          ret.push(doc.data());
          retId.push(doc.id);
        });
        setFirebaseData(ret);
        setFirebaseId(retId);
      } catch (error) {
        console.log('error');
      }
    };
    if (firebaseId === undefined) {
      firebase();
    } else {
      for (let i = 0; i < firebaseId.length; i++) {
        if (id === firebaseId[i]) {
          setFirebaseIndex(i);
        }
      }
    }
  }, [firebaseId]);

  return (
    <>
      {firebaseData !== undefined && firebaseIndex !== undefined && (
        <Contents
          index={CONTENTS_NUMBER}
          data={`ぬいぐるみオーダー:${id}`}
          back={CONTENTS_NUMBER}
          components={
            <Nui
              firebaseData={firebaseData[firebaseIndex]}
              nuiPartsApi={partsApidata}
            />
          }
        />
      )}
    </>
  );
};

export default Home;

export const getStaticPaths = async () => {
  let firebaseId: string[] = [];
  const db = getFirestore(firebaseApp);
  const col = collection(db, TARGET_COLLECTION_NAME);
  const querySnapshot = await getDocs(col);
  querySnapshot.forEach((doc) => {
    firebaseId.push(doc.id);
  });

  if (firebaseId !== undefined) {
    const paths = firebaseId.map((item, i) => ({
      params: { id: item },
    }));
    return {
      paths,
      fallback: false,
    };
  }
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const response = await fetch(`${partsApi}`);
  const partsApidata = await response.json();

  return {
    props: {
      id: params.id,
      partsApidata: partsApidata,
    },
  };
};
