<?php

namespace Tests\Feature;

use App\Models\Transacao;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TransacaoCreateTest extends TestCase
{

    #[\PHPUnit\Framework\Attributes\Test]
    public function it_creates_a_new_transaction()
    {
  
        $dadosTransacao = [
            'valor' => 20.50,
            'tipo' => 'despesa',
            'descricao' => 'MacDonalds'
        ];

        
        Transacao::create($dadosTransacao);


        $this->assertDatabaseHas('transacoes', $dadosTransacao);
    }
}