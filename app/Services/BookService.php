<?php 

namespace App\Services;

use App\Repositories\BookRepository;
use App\Http\Requests\Book\StoreRequest;

class BookService {
    private $repository;

    public function __construct(BookRepository $bookRepository)
    {
        $this->repository = $bookRepository;
    }

    /**
     * Get all book data from BookRepository
     *
     * 
     * @return void
     */

     public function getBook() : object
     {
        return $this->repository->getPaginated(9);
     }

     /**
     * Get all book data from BookRepository
     *
     * @param StoreRequest $request
     * 
     * @return void
     */
    public function storeBook(StoreRequest $request)
    {
        $validated = $request->validated();

        $this->repository->store([
            'name'  => $validated['name'],
            'author'  => $validated['author'],
            'published'  => $validated['published'],
            'description'  => $validated['description'],
            'synopsis'  => $validated['synopsis'],
            'price'  => $validated['price'],
            'file'  => $validated['file'],
        ]);
    }
}