function Error({ error }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Something went wrong!</h1>
      <p>{error}</p>
    </div>
  );
}

export default Error;
