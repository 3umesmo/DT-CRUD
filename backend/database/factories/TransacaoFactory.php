<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Transacao;

class TransacaoFactory extends Factory
{
    protected $model = Transacao::class;

    public function definition()
    {
        return [
            'valor' => $this->faker->randomFloat(2, 10, 1000),
            'tipo' => $this->faker->randomElement(['receita', 'despesa']),
            'descricao' => $this->faker->sentence(),
        ];
    }
}

