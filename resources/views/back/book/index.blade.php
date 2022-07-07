@extends('layouts.back')
@section('content')
<div class="content container-fluid">

    <div class="page-header">
    <div class="row align-items-center">
    <div class="col">
    <h3 class="page-title">Customers</h3>
    <ul class="breadcrumb">
    <li class="breadcrumb-item"><a href="index-2.html">Dashboard</a>
    </li>
    <li class="breadcrumb-item active">Customers</li>
    </ul>
    </div>
    <div class="col-auto">
        <a type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-primary me-1">
        <i class="fas fa-plus"></i>
        </a>
        <a class="btn btn-primary filter-btn" href="javascript:void(0);" id="filter_search">
        <i class="fas fa-filter"></i>
        </a>
        </div>
    </div>
    </div>

    <div class="row">
        <div class="col-12">
            @if (Session::get('success'))
                <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Sukses!</h4>
                    <div class="alert-body">
                        {{ Session::get('success') }}
                    </div>
                </div>
            @endif
            @if ($errors->any())
                <div class="alert alert-danger alert-dismissible fade show">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li class="mt-1">{{ $error }}</li>
                        @endforeach
                    </ul>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            @endif
        </div>
    </div>

    <!-- add modal  -->
    @include('back.book.add_modal')
    <!-- end add modal  -->

    <!-- edit modal  -->
    @include('back.book.edit_modal')
    <!-- end edit modal  -->

    <!-- delete modal  -->
    @include('back.book.delete_modal')
    <!-- end delete modal  -->

    <div id="filter_inputs" class="card filter-card">
        <div class="card-body pb-0">
        <div class="row">
        <div class="col-sm-6 col-md-3">
        <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
        </div>
        </div>
        <div class="col-sm-6 col-md-3">
        <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control">
        </div>
        </div>
        <div class="col-sm-6 col-md-3">
        <div class="form-group">
        <label>Phone</label>
        <input type="text" class="form-control">
        </div>
        </div>
        </div>
        </div>
    </div>

    <div class="row">
        @foreach($book as $b)
        <div class="col-12 col-md-6 col-lg-4 d-flex">
            <div class="card flex-fill bg-white">
            <img alt="Card Image" src="{{ asset('assets') }}/back/img/img-01.jpg" class="card-img-top">
            <div class="card-header">
            <h5 class="card-title mb-0">{{ $b->name }}</h5>
            </div>
            <div class="card-body">
            <p class="card-text">{{ $b->description }}</p>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" href="#">Edit</a>
            <a class="card-link" data-bs-toggle="modal" data-bs-target="#staticBackdropDelete" href="#">Delete</a>
            </div>
            </div>
        </div>
        @endforeach
    </div>

    <div class="row">
        <div class="col-md-12 d-flex flex-row justify-content-center">
            <ul class="pagination mb-4">
            <li class="page-item disabled">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item active">
            <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
            </li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
            <a class="page-link" href="#">Next</a>
            </li>
            </ul>
            </div>
    </div>
</div>
@endsection