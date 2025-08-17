import { usePage } from '@inertiajs/react';
import React from 'react'

const Create = () => {
 const cours = usePage.cours ?? [];

 console.log(cours);

 return (
    <div>
   {cours.map((c) => (
    <div key={c.id}>
     {c.title}

    </div>
   ))}
  </div>
 )
}

export default Create
