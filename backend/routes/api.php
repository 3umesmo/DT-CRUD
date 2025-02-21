<?php
    use App\Http\Controllers\TransacaoController;
    use Illuminate\Support\Facades\Route;
    
    Route::get('/transacoes', [TransacaoController::class, 'index']);
    Route::post('/transacoes', [TransacaoController::class, 'store']);
    Route::put('/transacoes/{id}', [TransacaoController::class, 'update']);
    Route::delete('/transacoes/{id}', [TransacaoController::class, 'destroy']);
    Route::get('/transacoes/receitas', [TransacaoController::class, 'showReceitas']);
    Route::get('/transacoes/despesas', [TransacaoController::class, 'showDespesas']);
    