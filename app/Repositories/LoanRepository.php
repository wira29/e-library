<?php 

namespace App\Repositories;

use App\Models\Loan;

class LoanRepository extends BaseRepository
{
    public function __construct(Loan $loan)
    {
        $this->model = $loan;
    }
}