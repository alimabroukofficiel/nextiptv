// import axios from 'axios';

// export default async function sitemap() {
//     const getSlug = (item) => {
//         return item.replace(/ /g, "-").replace(/\./g, "").toLowerCase();
//       };
//   let dataPages = []; 
//   try {
//     const response = await axios.get('http://localhost:1337/api/tutorials/?populate=*');
//     dataPages = response.data.data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }
  
//   const results = dataPages.map(item => ({
//     url: `http://localhost:3000/tutorials/post/${getSlug(item.attributes.title)}`,
//     lastModified : item.attributes.updatedAt,
//     changeFrequency:"weekly"
//   }));

//   return [
//     {
//         url: 'http://localhost:3000/about',
//       },
//       {
//         url: 'http://localhost:3000/pricing',
//       },
//       {
//         url: 'http://localhost:3000/why-us',
//       },
//     ...results
//   ];
// }
