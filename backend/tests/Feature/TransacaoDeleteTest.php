<?php

namespace Tests\Feature;

use App\Models\Transacao;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TransacaoDeleteTest extends TestCase
{
    //$id = 2;

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_deletes_a_transaction()
    {
       
        $transacao = Transacao::findOrFail($id);

        
        $transacao->delete();

 
        $this->assertDatabaseMissing('transacoes', [
            'id' => $id
        ]);
    }
}
