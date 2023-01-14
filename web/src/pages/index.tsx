interface HomeProps {
  count: number
}

export default function Home(props:HomeProps) {
  return (
    <>
      <h1>Contagem: {props.count}</h1>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count")
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
  const data = response;

  return {
    props: {
      count: data.count,
    },
  };
};
