import {Fragment} from 'react';

function UploadImage() {
  return (
    // COPIED OVER FROM ALBUM LIST (bootstrap)
    <Fragment>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Albums</a></li> {/* <- we modify here */}
          <li class="breadcrumb-item active" aria-current="page">Upload Image</li>
        </ol>
      </nav>
      <div>Upload Image</div>
    </Fragment>
  )
}
export default UploadImage