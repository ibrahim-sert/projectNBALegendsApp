import { useEffect } from "react";

const Search = ({ data, state, setState, setSearch, search }) => {
//****************************** */
//   const searchTerm = e.target.value.toLowerCase();

// console.log('search term:', searchTerm);

// const results = data.filter((post) => {
//   if (!searchTerm) return true;
//   return post.name.toLowerCase().includes(searchTerm);
// });

// console.log('search results:', results);

// setState({
//   search: e.target.value,
//   list: results,
// });
//************************************** */
// useEffect(() => {
// data.map((item)=>
// item )
  
// }, [])


  const handleChange = (e) => {
    // e.preventDefault()

    const results = data.filter((post) => {
      if (e.target.value === "") return post;;
      
      return post.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setState({
      search: e.target.value,
      list: results,
    });
  };

  

  return (
    <form className="form">
      <input
        onChange={handleChange}
        className="input"
        value={state.search}
        type="search"
        placeholder="Search Player..."
      />
    </form>
  );
};

export default Search;

//********************* */

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
