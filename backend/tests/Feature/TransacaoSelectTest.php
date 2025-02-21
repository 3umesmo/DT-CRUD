<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\DB;
use App\Models\Transacao;
use Tests\TestCase;

class TransacaoSelectTest extends TestCase
{
    #[\PHPUnit\Framework\Attributes\Test]
    public function fetches_all_transactions()
    {

       
        $receitas = Transacao::where('tipo', 'receita')->get()->toArray();;

        
        dump($receitas);
    }

}

