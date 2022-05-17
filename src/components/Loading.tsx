function Loading(): JSX.Element {
  return (
    <div v-if="isLoading" className="text-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
