import { NewPatient } from '@/components/new-patient';
import { auth } from '@clerk/nextjs/server';
import React from 'react';

const Registration = async () => {
    const {userId} = await auth(); //useUserId();
    const data = null;
    //const {data} = await getPatientDataById(userId!);
  return(
    <div>
        <NewPatient data={data!} type={!data ? "create" : "update"}/></div>
  );
};

export default Registration;