import React from 'react';

const page = () => {
  return (
    <div>
      Admin login
      <p>Fell free to login as an Admin</p>
    </div>
  );
}

export default page;

export async function generateMetadata({ params }){
  return{
    title: 'Admin: login'
  }
}