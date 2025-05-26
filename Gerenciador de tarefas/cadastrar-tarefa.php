<h1>Cadastrar Tarefas</h1>
<form action="?page=salvar-tarefa" method="POST">
	<input type="hidden" name="acao" value="cadastrar">
	<div class="mb-3">
		<label>Tarefa:</label>
		<input type="text" name="tarefa" class="form-control">
	</div>
	<div class="mb-3">
		<label>Descricoes:</label>
		<textarea name="descricao" class="form-control"></textarea>
	</div>
	<div>
		<label>Prazo de Vencimento:</label>
		<input type="date" name="vencimento" class="form-control">
	</div>
	<br>
	<div class="form-check">
	  <input class="form-check-input" type="radio" name="prioridade" id="exampleRadios1" value="Prioridade Alta" checked>
	  <label class="form-check-label" for="exampleRadios1">
	    Prioridades Alta
	  </label>
	</div>
	<div class="form-check">
	  <input class="form-check-input" type="radio" name="prioridade" id="exampleRadios2" value="Prioridade Media">
	  <label class="form-check-label" for="exampleRadios2">
	    Prioridades Media
	  </label>
	</div>
	<div class="form-check">
	  <input class="form-check-input" type="radio" name="prioridade" id="exampleRadios3" value="Prioridade Baixa">
	  <label class="form-check-label" for="exampleRadios3">
	    Prioridades Baixa
	  </label>
	</div>

	<div class="mb-3">
		<button type="submit" class="btn btn-success">Enviar</button>
	</div>
</form>