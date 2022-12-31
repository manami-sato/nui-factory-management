import type { NextPage } from 'next';
import Contents from '../src/components/Contents';
import Data from '../src/components/Data';
import { orderApi } from '../src/libs/api';
import { orderApiHeading } from '../src/libs/apiHeading';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { firebaseApp, TARGET_COLLECTION_NAME } from '../src/libs/firebase';
import { useEffect, useState } from 'react';

const CONTENTS_NUMBER = 0;

const Home: NextPage = ({}) => {
  const [firebaseId, setFirebaseId] = useState<string[]>();
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
        setFirebaseId(retId);
      } catch (error) {
        console.log('error');
      }
    };
    firebase();
  }, []);

  return (
    <Contents
      index={CONTENTS_NUMBER}
      data={CONTENTS_NUMBER}
      back={undefined}
      components={
        <Data
          heading={orderApiHeading}
          orderApi={orderApi}
          nuiApi={firebaseId}
        />
      }
    />
  );
};

export default Home;
