// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = () => {
//     axios
//       .get(
//         'http://newsapi.org/v2/top-headlines?country=kr&apiKey=180d4aabf5484e508c8e5b2e825bc01d',
//       )
//       .then((response) => {
//         setData(response.data);
//       });
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && (
//         <textarea
//           rows={7}
//           value={JSON.stringify(data, null, 2)}
//           readOnly={true}
//         ></textarea>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </>
  );
};

export default App;
