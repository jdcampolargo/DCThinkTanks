     // pages/index.js
     import React from 'react';
     import Link from 'next/link';

     const HomePage = () => (
       <div>
         <h1>Welcome to Event Management</h1>
         <Link href="/events">
           <a>View Events</a>
         </Link>
       </div>
     );

     export default HomePage;