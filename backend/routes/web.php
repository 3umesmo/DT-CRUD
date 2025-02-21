<?php

use App\Http\Controllers\TransacaoController;

Route::get('/transacoes/receitas', [TransacaoController::class, 'receitas']);
Route::get('/transacoes/despesas', [TransacaoController::class, 'despesas']);
Route::resource('transacoes', TransacaoController::class);

Route::get('/', function () {
    return view('welcome');
});