<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
        <form method="POST">
            @method('POST')
            @csrf
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Tambah Buku</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                
                <div class="row">
                <div class="col-md-6">
                <div class="form-group">
                <label>Judul</label>
                <input type="text" name="name" class="form-control">
                </div>
                <div class="form-group">
                <label>Penulis</label>
                <input type="text" name="author" class="form-control">
                </div>
                <div class="form-group">
                <label>Diterbitkan</label>
                <input type="text" name="published" class="form-control">
                </div>
                <div class="form-group">
                <div class="form-group">
                <label>Deskripsi</label>
                <textarea type="text" name="description" class="form-control"></textarea>
                </div>
                </div>
                </div>
                <div class="col-md-6">
                <div class="form-group">
                <label>Sinopsis</label>
                <textarea type="text" name="synopsis" class="form-control"></textarea>
                </div>
                <div class="form-group">
                <label>Harga Sewa / hari</label>
                <input type="text" name="price" class="form-control">
                </div>
                <div class="form-group">
                <label>Foto</label>
                <input type="file" name="photo" class="form-control">
                </div>
                <div class="form-group">
                <label>File</label>
                <input type="file" name="file" class="form-control">
                </div>
                </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Understood</button>
            </div>
        </div>
    </form>
    </div>
</div>