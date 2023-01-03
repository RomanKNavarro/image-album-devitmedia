import {Fragment} from 'react';


function AddAlbum() {
  return (
    // OBTAINED FROM BOOTSTRAP (https://getbootstrap.com/docs/4.0/components/breadcrumb/)
    <Fragment>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Albums</a></li> {/* <- we modify here */}
          <li class="breadcrumb-item active" aria-current="page">Add Album</li>
        </ol>
      </nav>
      <div>Add Album</div>
    </Fragment>
  )
}
export default AddAlbum