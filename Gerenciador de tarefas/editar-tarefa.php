<h1>Editar tarefas</h1>
<?php
	$sql = "SELECT * FROM tarefa 
			WHERE id_tarefa=".$_REQUEST['id_tarefa'];
	$res = $conn->query($sql);
	$row = $res->fetch_object();

?>
<form action="?page=salvar-tarefa" method="POST">
	<input type="hidden" name="acao" value="editar">
	<input type="hidden" name="id_tarefa" value="<?php print $row->id_tarefa; ?>">
	<div class="mb-3">
		<label>tarefa</label>
		<input type="text" value="<?php print $row->tarefa; ?>" name="tarefa" class="form-control">
	</div>
	<div class="mb-3">
		<label>Descricao</label>
		<textarea name="descricao" class="form-control"><?php print $row->descricao; ?></textarea>
	</div>
	<div class="mb-3">
		<label>Data vencimento</label>
		<textarea type="date" name="vencimento" class="form-control"><?php print $row->vencimento; ?></textarea>
	</div>
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