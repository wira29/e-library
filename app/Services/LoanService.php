<?php 

namespace App\Services;

use App\Repositories\LoanRepository;

class LoanService 
{
    protected $repository;

    public function __construct(LoanRepository $repository)
    {   
        $this->repository = $repository;
    }

    public function getLoan()
    {
        return $this->repository->getAll();
    }
}