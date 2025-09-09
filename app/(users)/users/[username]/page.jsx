const SingleProfile = async (props) => {
  const user = await props.params;
  return (
    <>
      <h1>user ={user.username}</h1>
    </>
  );
};

export default SingleProfile;
