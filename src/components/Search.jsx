import { useState } from "react";
import PlayerCard from "./PlayerCard";

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  let filteredData = data.filter((player) =>
    player.name.toLowerCase().includes(searchTerm)
  );

  if (searchTerm === "") {
    filteredData = data;
  }

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Search player..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="cards-container">
        {filteredData.map((player) => (
          <PlayerCard key={player.name} {...player} />
        ))}
      </div>
    </form>
  );
};

export default Search;



















// const Search = ({ setSearch, }) => {
//   const handleInputChange = (event) => {
//     setSearch(event.target.value);
//   };

//   return (
//     <form className="form">
//       <input
//         onChange={handleInputChange}
//         className="input"

//         type="text"
//         placeholder="Search Player..."
//       />
//     </form>
//   );
// };

// export default Search;

//************************************************* */

//   import { useEffect } from "react";

// const Search = ({data, state,setState, setSearch,search }) => {

//   const handleChange = (e) => {
//     // e.preventDefault()

//         const results = data.filter(post => {
//             if (e.target.value==="") return post
//             return post.name.toLowerCase().includes(e.target.value.toLowerCase())
//         })
//         setState({
//     search: e.target.value,
//             list: results
//         })
//     }
//   useEffect((e) => {

//     }, [data])

//     return (

//       <form  className="form">
//         <input
//           onChange={handleChange}
//           className="input"
//           value={state.search}
//           type="search"
//           placeholder="Search Player..."
//         />
//       </form>
//     );
//   };

//   export default Search;


//**************************************** */

// import { useEffect } from "react";

// const Search = ({ data, state, setState, setSearch, search }) => {

//   const handleChange = (e) => {
//     // e.preventDefault()

//     const results = data.filter((post) => {
//       if (e.target.value === "") return post;;
      
//       return post.name.toLowerCase().includes(e.target.value.toLowerCase());
//     });
//     setState({
//       search: e.target.value,
//       list: results,
//     });
//   };

  

//   return (
//     <form className="form">
//       <input
//         onChange={handleChange}
//         className="input"
//         value={state.search}
//         type="search"
//         placeholder="Search Player..."
//       />
//     </form>
//   );
// };

// export default Search;