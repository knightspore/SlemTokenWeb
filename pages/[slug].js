import createColor from "../utils/createColor";

export default function User({ bg }) {
  return <div style={{ backgroundColor: bg }}>{"Hi there"}</div>;
}

export async function getServerSideProps(context) {
  const bg = createColor(context.params.slug);

  return {
    props: {
      bg,
    },
  };
}
