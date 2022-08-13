function ThumbnailUploader() {
  return (
    <div id="uploadThumbnail" className="mt-3">
      <h2>Upload The Thumbnail Photo Here</h2>
      <div className="mt-3 thumbnail">
        <label htmlFor="formFile" className="form-label">
          Add a single thumbnail file
        </label>
        <input className="form-control p-5" type="file" id="formFile" />
      </div>
    </div>
  );
}

export default ThumbnailUploader;
