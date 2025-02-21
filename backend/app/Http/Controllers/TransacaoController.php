<?php

namespace App\Http\Controllers;

use App\Models\Transacao;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class TransacaoController extends Controller
{
  
    public function index()
    {

        $transacoes = Transacao::all()->toArray();;


        return response()->json($transacoes, Response::HTTP_OK);
    }

    public function receitas()
    {
    
        $receitas = Transacao::where('tipo', 'receita')->get();


        return response()->json($receitas, Response::HTTP_OK);
    }

    public function despesas()
    {
 
        $despesas = Transacao::where('tipo', 'despesa')->get();


        return response()->json($despesas, Response::HTTP_OK);
    }

    
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'valor' => 'required|numeric',
            'tipo' => 'required|in:receita,despesa',
            'descricao' => 'required|string|max:255',
        ]);


        $transacao = Transacao::create($validatedData);


        return response()->json([
            'message' => 'Transação criada com sucesso.',
            'transacao' => $transacao
        ], Response::HTTP_CREATED);
    }

    public function update(Request $request, $id)
    {

        $validatedData = $request->validate([
            'valor' => 'required|numeric',
            'tipo' => 'required|in:receita,despesa',
            'descricao' => 'required|string|max:255',
        ]);


        $transacao = Transacao::findOrFail($id);


        $transacao->update($validatedData);


        return response()->json([
            'message' => 'Transação atualizada com sucesso.',
            'transacao' => $transacao
        ], Response::HTTP_OK);
    }


    public function destroy($id)
    {

        $transacao = Transacao::findOrFail($id);


        $transacao->delete();


        return response()->json([
            'message' => 'Transação excluída com sucesso.'
        ], Response::HTTP_NO_CONTENT);
    }
}
