//To tell next how many data pages should be made based on the number of data
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

//fetch each items we actually need and put it into props component
//in order to generate correct template for each data pages
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>Details page of {ninja.name}</h1>
      <h3>NINJA EMAIL: {ninja.email}</h3>
      <h3>NINJA WEBSITE: {ninja.website}</h3>
      <h3>NINJA LOCATION: {ninja.address.city}</h3>
    </div>
  );
};

export default Details;
